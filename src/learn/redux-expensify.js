import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


const AddExpenseAction = ({description='', note='', amount=0,createdAt=0}={})=>{
    return {
        type:'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description: description,
            note: note,
            amount: amount,
            createdAt: createdAt
        }
    }
}
const RemoveExpenseAction = (id)=>{
    return {
        type:'REMOVE_EXPENSE',
        id:id
    }
}
const EditExpense = (id, expense)=>{
    return {
        type:'EDIT_EXPENSE',
        id: id,
        expense:expense
    }
}

//Filter Actions
const FilterTextAction = (text)=>{
    return{
        type:'FILTER_TEXT',
        text:text
    }
}

const SortByAmount =(sortBy)=>{
    return{
        type: 'SORT_AMOUNT',
        sortBy: sortBy
    }
}
const SortByDate =(sortBy)=>{
    return{
        type: 'SORT_DATE',
        sortBy: sortBy
    }
}
const StartDate = (startDate)=>{
    return {
        type: 'START_DATE',
        startDate: startDate
    }
}
const EndDate = (endDate)=>{
    return {
        type: 'END_DATE',
        endDate: endDate
    }
}
const expenseDefaultSate = [];
const expenseReducer = (state=expenseDefaultSate, action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return state.concat(action.expense);
        case 'REMOVE_EXPENSE':
            return state.filter((expense)=>{
                return expense.id !== action.id
            });
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {...expense, ...action.expense}
                }
                return expense;
            });
        default:
            return state;
    }
}
const filterDefaultState = {
    text:'',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
}

const filterReducer = (state=filterDefaultState, action)=>{
    switch(action.type){
        case 'FILTER_TEXT':
            return {...state, text:action.text }
        case 'SORT_AMOUNT':
            return {...state, sortBy:action.sortBy}
        case 'SORT_DATE':
            return {...state, sortBy:action.sortBy}
        case 'START_DATE':
            return {...state, startDate:action.startDate}
        case 'END_DATE':
            return {...state, endDate:action.endDate}
        default:
            return state;
    }
}

const store = createStore(combineReducers(
    {   expenses: expenseReducer,
        filters: filterReducer
    }
));

const expenseOne = store.dispatch(AddExpenseAction({
    description:'Rent',
    note: 'pagal ho tum',
    amount: 1001,
    createdAt: '23-56-89'
}));
const expenseTwo = store.dispatch(AddExpenseAction({
    description:'Rent',
    note: 'pagal ho tum',
    amount: 1004,
    createdAt: '23-56-89'
}));
store.dispatch(RemoveExpenseAction(expenseTwo.expense.id));
store.dispatch(EditExpense(expenseOne.expense.id, {amount: 500}))
store.dispatch(FilterTextAction('renta'))
store.dispatch(SortByAmount('amount'))
store.dispatch(SortByDate('date'))
store.dispatch(StartDate(250));
store.dispatch(EndDate(350));
console.log(store.getState());
// const demoState = {
//     expenses:[
//         {
//             id:'jdhjkfhjf',
//             description: 'January Rent',
//             note:'This is the final amount for month January',
//             amount: 45780,
//             createdAt: 0
//         }
//     ],
//     filters:{
//         text: 'rent',
//         sortBy: 'amount',
//         startDate: undefined,
//         endDate: undefined
//     }
// };