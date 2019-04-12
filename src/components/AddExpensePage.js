import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import {connect} from 'react-redux';
import {AddExpenseAction} from '../actions/expenses';
const AddExpensePage =(props) =>{
    return (
        <div>
        <p>Please add some expense here</p>
        <ExpenseForm onSubmit={(expense)=>{
            props.dispatch(AddExpenseAction(expense))
            props.history.push('/')
        }}/>
        </div>
    );
}
export default connect()(AddExpensePage);