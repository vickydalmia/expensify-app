import  filterReducer from '../../reducers/filters';
import moment from 'moment';
const filterDefaultState = {
    text:'',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
}

test('should set up default values', ()=>{
    const result = filterReducer(undefined, {type:"@@INIT"});

    expect(result).toEqual(filterDefaultState);
});