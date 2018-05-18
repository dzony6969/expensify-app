import moment from 'moment';

import { setTextFilter,
    sortByDate,
    sortByAmount,
    setStartDate,
    setEndDate }
    from '../../actions/filters'



test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    });
});
test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    });
});
test('should return text filter action object', () => {
    const action = setTextFilter('bla')
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "bla"
    });
});
test('should return text filter action object', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ""
    });
});

test('should return sort by data', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    })
});
test('sort by amount should return object action sort', () =>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    })

});