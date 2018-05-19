import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([])
    expect(res).toBe(0);

});
test('should add single expenses', () => {

    const res = selectExpensesTotal([expenses[0]])
    expect(res).toBe(123)
});
test('should add single expenses', () => {

    const res = selectExpensesTotal(expenses)
    expect(res).toBe(15460)
});

console.log(selectExpensesTotal)