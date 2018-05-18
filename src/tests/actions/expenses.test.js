import  { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({ //jesli porownujemy obiekt lub array
        //uzywaj toEqual poniewaz obiekt != obiekt nawet jesli sa takie same
        type: "REMOVE_EXPENSE",
        id: '123abc'
    })
});

test('should return updated value', () =>{
    const action = editExpense('123abc', {note: '123abc'});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates: {
            note: '123abc'
        }
    })
});

test('should setup add expense action object', () => {
    const expenseData = {
        description: 'rent',
        amount: 100,
        createdAt: 1000,
        note: 'this was note'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should setup add expense action default', () =>{

    const action = addExpense();
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String) //byle jaki string ma zwrócić
            //bo id to losowy string
        }

    });
});