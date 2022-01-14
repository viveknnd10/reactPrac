import React from 'react';
import Expenses from "./components/expenses/Expenses";
import Card from "./components/UI/Card";
import NewExpense from "./components/expenses/NewExpense";
function App() {
  const SaveAddedExpenseHandler=(expenseDataReceived)=>
  {
    console.log(expenseDataReceived);
  }
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
   { 
      id: "e2", 
      title: "New TV", 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <NewExpense onSaveAddedExpense={SaveAddedExpenseHandler}/>
      <Card className="expenses">
        <Expenses temp={expenses[0]}/>
        <Expenses temp={expenses[1]}/>
        <Expenses temp={expenses[2]}/>
        <Expenses temp={expenses[3]}/>
      </Card>
    </div>
  );
}

export default App;
