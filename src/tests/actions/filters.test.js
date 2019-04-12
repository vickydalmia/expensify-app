import {StartDate, EndDate, FilterTextAction, SortByAmount, SortByDate} from '../../actions/filters';
import moment from 'moment';

test('should set start date', ()=>{
    const startDate = moment(0)
    const result = StartDate(startDate);

    expect(result).toEqual({
        type:'START_DATE',
        startDate: startDate,
    });
});

test('should set end Date', ()=>{
    const startDate = moment(0);
    const result = EndDate(startDate);

    expect(result).toEqual({
        type: 'END_DATE',
        endDate: startDate
    });
});

test('should set sort by date value', ()=>{
    const result = SortByDate('date');
    expect(result).toEqual({
        type: 'SORT_DATE',
        sortBy: 'date'

    })
});
test('should set sort by amount value', ()=>{
    const result = SortByAmount('amount');
    expect(result).toEqual({
        type:'SORT_AMOUNT',
        sortBy: 'amount'
    })
});

test('should set deafult text value no value provided', ()=>{
    const result = FilterTextAction();
    expect(result).toEqual(
        {
            type: 'FILTER_TEXT',
            text: ''
        }
    );
});

test('should set text when value is provided', ()=>{
    const result = FilterTextAction('amount');
    expect(result).toEqual({
        type:'FILTER_TEXT',
        text: 'amount'
    });
})