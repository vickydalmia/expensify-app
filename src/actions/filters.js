export const FilterTextAction = (text='')=>{
    return{
        type:'FILTER_TEXT',
        text:text
    }
}

export const SortByAmount =(sortBy)=>{
    return{
        type: 'SORT_AMOUNT',
        sortBy: sortBy
    }
}
export const SortByDate =(sortBy)=>{
    return{
        type: 'SORT_DATE',
        sortBy: sortBy
    }
}
export const StartDate = (startDate)=>{
    return {
        type: 'START_DATE',
        startDate: startDate
    }
}
export const EndDate = (endDate)=>{
    return {
        type: 'END_DATE',
        endDate: endDate
    }
}