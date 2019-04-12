import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {RemoveExpenseAction} from '../actions/expenses';
const ExpenseItem = (props) =>{
    return (
        <div>
            <h3><Link to={`/edit/${props.id}`}>{props.description}</Link></h3>
            <p>{props.note}</p>
            <p>{props.amount}</p>
            <p>{props.createdAt}</p>
            <button onClick={(e)=>{
                props.dispatch(RemoveExpenseAction(props.id));
            }}>Remove Expense</button>
        </div>
    );
}
const mapStateToProps = (state)=>{
    return {
        expenses: state.expenses
    }
}
export default connect(mapStateToProps)(ExpenseItem);