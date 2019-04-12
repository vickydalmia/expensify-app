import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import {EditExpense} from '../actions/expenses';



const EditExpensePage=(props)=>{
    return (
        <div>
            <ExpenseForm expense={props.expense} onSubmit={(expense)=>{
                props.dispatch(EditExpense(props.expense.id, expense));
                props.history.push('/');
            }}/>
        </div>
    );
}

const mapStateToProps = (state, props) =>{
    return {
        expense: state.expenses.find((expense)=>{
            return expense.id === props.match.params.id;
        })
    }
}
export default connect(mapStateToProps)(EditExpensePage);