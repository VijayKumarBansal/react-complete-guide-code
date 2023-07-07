import Expenses from "./components/Expenses/Expenses";
const App = (props) => {
  const expenses = [

    {id: "e1", title : "Car Insurance", amount : "1000", date: new Date(2023, 7, 4)},
    {id: "e2", title : "TV", amount : "4000", date: new Date(2023, 5, 2)},
    {id: "e3", title : "Travelling", amount : "3000", date: new Date(2023, 6, 5)},
    {id: "e4", title : "Shopping", amount : "2000", date: new Date(2023, 2, 3)}
  ]
  return (
    <div>
      <h2>Expense tracker</h2>
      <Expenses expenseItem={expenses} />
    </div>
  );
}

export default App;
