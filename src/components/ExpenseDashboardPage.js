import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseFilter from '../components/ExpenseListFilter';
const ExpenseDashboardPage = ()=>{
    return (
        <div>
        <p>I am dashboard Page</p>
        <ExpenseFilter/>
        <ExpenseList/>
        </div>
    );
}

export default ExpenseDashboardPage;