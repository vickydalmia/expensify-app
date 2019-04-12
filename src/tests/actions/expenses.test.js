import {AddExpenseAction, RemoveExpenseAction, EditExpense} from '../../actions/expenses';


test('remove expense return object check', ()=>{
    const result = RemoveExpenseAction("123abs");

    expect(result).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abs'
    });
});

test('should be return of editexpense', ()=>{
    const result = EditExpense('abc', {description:'vicky', amount:5000, note:'test'});
    expect(result).toEqual({
        type:'EDIT_EXPENSE',
        id: 'abc',
        expense:{description: 'vicky',
        amount: 5000,
        note: 'test'}
    });
});

test('should return the supplied values', ()=>{
    const expenseData = {
        description:'test',
        amount: 5000,
        note: 'Hi I am test',
        createdAt: 23456
    }
    const result = AddExpenseAction(expenseData);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    }
    );
})

test('should be default values', ()=>{
    const result = AddExpenseAction();
    expect(result).toEqual(
        {
            type:'ADD_EXPENSE',
            expense:{
                description: '',
                note: '',
                createdAt: 0,
                amount: 0,
                id: expect.any(String)
            }
        }
    );
});