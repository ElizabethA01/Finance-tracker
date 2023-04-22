import React, {useState} from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false)
    const saveExpenseDataHandler = (userData) => {
        const expenseData = {
            ...userData,
            id: Math.random().toString()
        }
        props.onAddExpenseHandler(expenseData);
        setIsEditing(false)
    }
    const showExpenseForm = () => {
        setIsEditing(true)
    }

    const removeExpenseForm = () => {
        setIsEditing(false)
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={showExpenseForm}>Add New Expense</button>}
            {isEditing && <ExpenseForm onCancel={removeExpenseForm} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    )

}

export default NewExpense;