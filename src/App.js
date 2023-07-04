import ExpenseItem from "./components/ExpenseItem";
function App() {
  const expenses = [

    {id: "e1", title : "Car Insurance", amount : "1000", date: new Date(2023, 7, 4)},
    {id: "e2", title : "TV", amount : "4000", date: new Date(2023, 5, 2)},
    {id: "e3", title : "Travelling", amount : "3000", date: new Date(2023, 6, 5)},
    {id: "e4", title : "Shopping", amount : "2000", date: new Date(2023, 2, 3)}
  ]
  return (
    <div>
      <h2>Expense tracker</h2>
      <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem 
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem 
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem 
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
