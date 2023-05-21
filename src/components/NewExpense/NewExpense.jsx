import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props){
    const saveExpenseData = (expenseData) => {
        let id = "e" + (props.expenseID + 1);
        const newExpenseData = {
            id,
            ...expenseData
        };
        props.onAddExpenseData(newExpenseData);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseData}/>
        </div>
    );
}

export default NewExpense;