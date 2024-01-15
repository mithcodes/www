import React from 'react';
import ExpensesData from "../Expenses/ExpensesData.jsx";
import ExpensesItem from './components/ExpensesItem'


const App = () => {
  const expenses = [
    {
      id: 'e1',
      date: new Date(2023, 4, 6),
      title: 'School Fee',
      amount: 3000,
    },
    {
      id: 'e2',
      date: new Date(2023, 4, 7),
      title: 'Food',
      amount: 3050,
    },
    {
      id: 'e3',
      date: new Date(2023, 1, 7),
      title: 'Food',
      amount: 3050,
    },
  ];

  return (
    <>
      <div>
        <h1>Hi</h1>
        <h2>Expenses tracker</h2>
        <ExpensesData item={expenses} />
      </div>
    </>
  );
};

export default App;
