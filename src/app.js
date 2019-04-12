import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './router/AppRouter';
import storeCreator from './store/configStore';
import {AddExpenseAction, EditExpense, RemoveExpenseAction} from './actions/expenses';
import {FilterTextAction, EndDate, SortByAmount, SortByDate, StartDate} from './actions/filters';
import '../node_modules/normalize.css/normalize.css';
import '../styles/style.scss';

const store = storeCreator();
store.dispatch(AddExpenseAction({description:'Rent Bill', amount: 389760}));
store.dispatch(AddExpenseAction({description:'Water Bill', amount: 567890}));

const AppProvider = (
    <Provider store={store}>
       <AppRouter/>
    </Provider>
);


ReactDOM.render(AppProvider, document.getElementById('app'));