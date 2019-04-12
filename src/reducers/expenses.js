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
            console.log(action.id, action.expense);
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
export default expenseReducer;