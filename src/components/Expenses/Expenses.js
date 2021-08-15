import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filterValue, setFilterValue] = useState("2020");

  const filterChangeHandler = (selectedFilter) => {
    setFilterValue(selectedFilter);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterValue;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filterValue}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
