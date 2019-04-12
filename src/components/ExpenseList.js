import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import VisibleExpenses from '../selector/VisibleExpenses';

const ExpenseList = (props) =>{
    return (
        <div>
        <p>I am expense list</p>
        {props.expenses.length>0 && props.expenses.map((expense)=>{
            return <ExpenseListItem key={expense.id}
            {...expense}
            />
        })}
        </div>
    );
}
const mapSateToProp = (state)=>{
    return {
        expenses: VisibleExpenses(state.expenses, state.filters)
    }
}
export default connect(mapSateToProp)(ExpenseList)