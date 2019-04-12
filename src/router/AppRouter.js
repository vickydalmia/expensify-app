import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import Header from '../components/Header';



const AppRouter = () =>{
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={ExpenseDashboardPage} exact/>
                    <Route path="/edit/:id" component={EditExpensePage}/>
                    <Route path="/help" component={HelPage}/>
                    <Route path="/create" component={AddExpensePage}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
export default AppRouter;