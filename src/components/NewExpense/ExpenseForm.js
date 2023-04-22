import React, {useState} from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    })
    const changeHandler = (event) => {
        const {name, value} = event.target;
        setUserInput(prevInput => {
                return {
                    ...prevInput,
                    [name]: value
                }
            }
        )
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.title,
            amount: userInput.amount,
            date: new Date(userInput.date)
        };
        props.onSaveExpenseData(expenseData);
        setUserInput({
            title: '',
            amount: '',
            date: ''
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input name='title' value={userInput.title} onChange={changeHandler} type='text'/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input name='amount' value={userInput.amount} onChange={changeHandler} type='number' min='0.01' step='0.01'/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input name='date' value={userInput.date} onChange={changeHandler} type='date' min='2020-01-01' max='2024-12-31'/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;