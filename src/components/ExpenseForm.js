import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates'; 
import 'react-dates/lib/css/_datepicker.css' //styl kalendrza 

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
        description: props.expense ? props.expense.description : '',
        note: props.expense ? props.expense.note : '',
        amount: props.expense ? (props.expense.amount /100).toString() : '',
        createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
        calendarFocused: false,
        error: ''

        }
    }
    OnDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() =>({description}));
        
    }
    onNoteChange = (e) => {
        e.persist() //inne wyjscie
        this.setState(() => ({note: e.target.value}))
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) { //regular expression 31233123.22 i nie wiecej
        this.setState(() => ({amount}))
        }
    };
    onDateChange = (createdAt) => {
        if(createdAt) {
        this.setState(() => ({createdAt}));
        }
    };
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount) {
          this.setState(() => ({error: 'Nie dodano nazwy oraz kwoty wydatku'}))
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note

            })
        }

    }

    render() {
        return (

       
              
               <form className='form' onSubmit={this.onSubmit}>
               {this.state.error && <p className='form__error'>{this.state.error}</p>}
                   <input 
                   type='text'
                   className='text-input'
                   placeholder='Nazwa wydatku'
                   autoFocus //po przelaczeniu od razu zaznacza input
                   value={this.state.description}
                   onChange={this.OnDescriptionChange}
                   />
                   <input type='text'
                   placeholder='Kwota'
                   className='text-input'
                   value={this.state.amount}
                   onChange={this.onAmountChange}
                   
                   />
                   <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false }
                    />
                   <textarea 
                   className='textarea'
                   placeholder='opis wydatku'
                   value={this.state.note}
                   onChange={this.onNoteChange}
                   >
                    </textarea>
                    <div>
                   <button className='button'>Wyślij</button>
                   </div>
                </form>
                
         
        )
    }
}