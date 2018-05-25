import React from 'react'
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses'
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal /100).format('0,0.00') + ('zł')
    return (
    <div className='page-header'>
    <div className='content-container'>
        <h1 className='page-header__title'>Oglądasz <span>{expenseCount}</span>  swoje wydatki <br/>  Suma: <span>{formattedExpensesTotal}</span></h1>
        <div className='page-header__actions'>
            <Link to='/create' className='button'> Dodaj nowy wydatek </Link>
        </div>
        </div>
    </div>
)
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)

    };
}


export default connect(mapStateToProps)(ExpensesSummary)