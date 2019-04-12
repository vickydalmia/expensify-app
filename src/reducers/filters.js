import moment from 'moment';

const filterDefaultState = {
    text:'',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
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

export default filterReducer;