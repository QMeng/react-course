import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {props.expenseData.map((expense) => (
                <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>
            ))}
        </Card>
    );
}

export default Expenses;