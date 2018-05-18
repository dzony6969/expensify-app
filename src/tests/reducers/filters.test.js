import moment from 'moment'
import filterReducer from '../../reducers/filters';
import { filter } from 'rxjs/operator/filter';

test('should setup default filter value', () => {
    const state = filterReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, {type: "SORT_BY_AMOUNT"})
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = { type: "SORT_BY_DATE"}
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date')
});

//text filter
test('should sortBy date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    }
    const action = { type: "SET_TEXT_FILTER", text: 'bla2' }
    const state = filterReducer(currentState, action);
    expect(state.text).toBe(action.text);
});

test('should return startDate filter', () => {
    const startDate = '1000'
    const action = { type: "SET_START_DATE",
    startDate}
    const state = filterReducer(undefined, action)
    expect(state.startDate).toBe(startDate);
});

test('should return startDate filter', () => {
    const endDate = '1000'
    const action = { type: "SET_END_DATE",
    endDate}
    const state = filterReducer(undefined, action)
    expect(state.endDate).toBe(endDate);
});