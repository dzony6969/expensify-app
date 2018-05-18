import React from 'react';
import ExpenseList from './expenseList';
import ExpenseListFilters from './ExpenseListFilters';
const Expense = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default Expense;