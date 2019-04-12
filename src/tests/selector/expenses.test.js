import expensesFilter from '../../selector/VisibleExpenses';
import moment from 'moment';
const expenses= [
    {
        id: '1',
        description: 'Rent',
        amount: 100,
        note: 'Rent Bill',
        createdAt: 0
    },
    {
        id: '2',
        description: 'Went',
        amount: 120,
        note: 'Went Bill',
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '3',
        description: 'Want',
        amount: 90,
        note: 'Want Bill',
        createdAt: moment(0).add(4, 'days').valueOf()
    }
];

test('should filter by text value',()=>{
    const filters = {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = expensesFilter(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should filter by start date',()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = expensesFilter(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]]);
});
test('should filter by end date',()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0).add(2, 'days')
    }
    const result = expensesFilter(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort the values by date', ()=>{
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = expensesFilter(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});
test('should sort the values by amount', ()=>{
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = expensesFilter(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
});