import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props){
    return(
        <div className="expenses">
            <ExpenseItem 
                title={props.expenseItem[0].title}
                amount={props.expenseItem[0].amount}
                date={props.expenseItem[0].date}
            />
            <ExpenseItem 
                title={props.expenseItem[1].title}
                amount={props.expenseItem[1].amount}
                date={props.expenseItem[1].date}
            />
            <ExpenseItem 
                title={props.expenseItem[2].title}
                amount={props.expenseItem[2].amount}
                date={props.expenseItem[2].date}
            />
            <ExpenseItem 
                title={props.expenseItem[3].title}
                amount={props.expenseItem[3].amount}
                date={props.expenseItem[3].date}
            />
        </div>
    );
}

export default Expenses;