import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState("2022");
    const filterOnYear = (year) => {
        setFilteredYear(year);
    };
    const expenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    return (
        <div className="expenses">
            <ExpenseFilter selected={filteredYear} onYearFilter={filterOnYear}/>
            {expenses.length === 0 ? <h3>You don't have any data for the year {filteredYear}</h3> : 
                <Card>
                    <ExpenseChart expenses={expenses} />
                    {expenses.map((expense, index) => {
                        return (
                            <ExpenseItem
                                key={index}
                                title={expense.title}
                                amount={expense.amount}
                                date={expense.date}
                            />
                        );
                        
                    })}
                </Card>
            }
        </div>
    );
}

export default Expenses;
