import React, {useState} from 'react';
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
    const [filterValue, setFilterValue] = useState('2020');

    const filterChangeHandler = (selectedFilter) => {
        setFilterValue(selectedFilter);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filterValue} onFilterChange={ filterChangeHandler } />
            {props.expenseData.map((expense) => (
                <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
            ))}
        </Card>
    );
}

export default Expenses;