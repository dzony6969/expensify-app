import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { setEditExpense, setRemoveExpense } from '../actions/expenses';
const EditExpensePage = (props) => {
    return (
    <div>
        edditing the expense of {props.match.params.id} 
          {/* pokazuje id w ktorym jestesmy */}
        <ExpenseForm 
        expense={props.expense}

        onSubmit={(expense) => {
            props.dispatch(setEditExpense(props.expense.id, expense)); //dodawaniee
            props.history.push('/');
        }}
        />
        <button onClick={(expense) => {
       props.dispatch(setRemoveExpense({id: props.expense.id}));
       props.history.push('/')
        // HandleDeleteItem musisz podac id i dispatch w w.w obiekcie
      }}>Remove</button>
    </div>
)
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find( expense => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage);