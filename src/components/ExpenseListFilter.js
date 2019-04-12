import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import moment, { isMoment } from 'moment';
import {FilterTextAction, SortByAmount, SortByDate, StartDate, EndDate} from '../actions/filters';

class ExpenseFilter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            calendarFocused: null
        }
        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
    }
    onDateChange({startDate, endDate}){
        this.props.dispatch(StartDate(startDate));
        this.props.dispatch(EndDate(endDate))
    }
    onFocusChange(calendarFocused){
        this.setState(()=>{
            return{
                calendarFocused: calendarFocused
            }
        });
    }
    render(){
        return (
            <div>
            <input type="text"  value={this.props.filters.text} onChange={(e)=>{
                this.props.dispatch(FilterTextAction(e.target.value));
            }}/>
            <select value={this.props.filters.sortBy} onChange={(e)=>{
                if(e.target.value==='amount'){
                    this.props.dispatch(SortByAmount(e.target.value))
                }else if(e.target.value==='date'){
                    this.props.dispatch(SortByDate(e.target.value))
                }
            }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker
                startDate= {this.props.filters.startDate}
                startDateId={'1234567'}
                endDateId={'45678934'}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDateChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                showClearDates={true}
                isOutsideRange={()=>{
                    return false;
                }}
            />
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        filters: state.filters
    }
}
export default connect(mapStateToProps)(ExpenseFilter);