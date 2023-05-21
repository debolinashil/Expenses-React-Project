import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props){

    const [formInputs, setFormInputs] = useState({
        expenseTitle: "",
        expenseAmount: "",
        expenseDate: ""
    });


    const titleChangeHandler = (event) => {
        setFormInputs((prevValue)=>{
            return {
                ...prevValue,
                expenseTitle: event.target.value
            };
        });
    }
    const amountChangeHandler = (event) => {
        setFormInputs((prevValue)=>{
            return {
                ...prevValue,
                expenseAmount: event.target.value
            };
        });
    }
    const dateChangeHandler = (event) => {
        setFormInputs((prevValue)=>{
            return {
                ...prevValue,
                expenseDate: event.target.value
            };
        });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: formInputs.expenseTitle,
            amount: formInputs.expenseAmount,
            date: new Date(formInputs.expenseDate)
        };
        setFormInputs({
            expenseTitle: "",
            expenseAmount: "",
            expenseDate: ""
        });
        props.onSaveExpenseData(expenseData);
    }

    return (<form onSubmit={submitHandler}>
        <h1>{formInputs.title} {formInputs.amount} {formInputs.date}</h1>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={formInputs.expenseTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={formInputs.expenseAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min='2020-01-01' max='2023-12-31' value={formInputs.expenseDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>);
}

export default ExpenseForm;