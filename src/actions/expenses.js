import uuid from 'uuid';

export const AddExpenseAction = ({description='', note='', amount=0,createdAt=0}={})=>{
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
export const RemoveExpenseAction = (id)=>{
    return {
        type:'REMOVE_EXPENSE',
        id:id
    }
}
export const EditExpense = (id, expense)=>{
    return {
        type:'EDIT_EXPENSE',
        id: id,
        expense:expense
    }
}