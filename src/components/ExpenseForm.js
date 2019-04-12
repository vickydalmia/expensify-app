import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            description: this.props.expense?this.props.expense.description:'',
            note: this.props.expense?this.props.expense.note:'',
            amount:this.props.expense?(this.props.expense.amount/100).toString():'',
            createdAt: this.props.expense?moment(this.props.expense.date):moment(),
            calenderFocused: false,
            error: ''
        }
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onNoteChange = this.onNoteChange.bind(this);
        this.onAmountChange = this.onAmountChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onDateChange(moment){
        if (!moment){
            return;
        }
        this.setState(()=>{
            return {
                createdAt: moment
            }
        });
    }
    onFocusChange({focused}){
        this.setState(()=>{
            return {
                calenderFocused: focused
            }
        });

    }
    onAmountChange(e){
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>{
                return {
                    amount //amount:amount in es6 if variable name and property name is same we can use only one name
                }
            });
        }
    }
    onChangeDescription(e) {
        const newDescription = e.target.value;
        this.setState((prevState)=>{
            return {
                description: newDescription
            }
        })
    }
    onNoteChange(e){
        const newNote = e.target.value;
        this.setState(()=>{
            return {
                note: newNote
            }
        })
    }
    onSubmit(e){
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>{
                return {
                    error: 'Please provide description and error'
                }
            });
        }else{
            this.setState(()=>{
                return {
                    error: ''
                }
            });
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10)*100,
                note: this.state.note,
                createdAt: this.state.createdAt.valueOf()
            });
        }
        
    }
    render(){
        return (
            <div>
            <p>Expense Form</p>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
            <input type="text" placeholder="description" autoFocus value={this.state.description} onChange={this.onChangeDescription}/>
            <input type="text" placeholder="amount" value={this.state.amount} onChange={this.onAmountChange}/>
            <SingleDatePicker
                date={this.state.createdAt}
                onDateChange={this.onDateChange}
                focused={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths= {1}
                isOutsideRange={(day)=>{
                    return false;
                }}
                />
            <textarea placeholder="Add the note" onChange={this.onNoteChange} value={this.state.note}></textarea>
            <button>Add Expense</button>
            </form>
            </div>
        );
    }
}