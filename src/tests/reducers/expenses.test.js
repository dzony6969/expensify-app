import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', ()=> {
    const state = expensesReducer(undefined, { type: "@@INIT" })
    //INIT ustawia sie tylko dla default state
    expect(state).toEqual([]);
});

test('should remove expense by id usuwa id nr 1', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([ expenses[0], expenses[2] ])
});

test('nie powinien nic usunac', () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});

//add expense 
test('should add another item do array', ()=> {
    const expense = {
        id: '4',
        description: 'guma',
        note: '',
        amount: 12223,
        createdAt: 20000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
});
//edit by id
test('should edit item on list', () => {
    const amount = 100;    
    
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toEqual(amount)
})

//do not edit without id
test('should not edit if edit id != ', () => {
  const amount = 1200;
    const action = {
        type: "EDIT_EXPENSE",
        id: '-3',
        updates: {
            amount
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)

});