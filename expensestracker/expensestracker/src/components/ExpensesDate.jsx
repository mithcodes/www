import React from 'react';
import './ExpensesDate.css';

const ExpensesDate = ({ date }) => {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();
  const day = date.toLocaleString('en-US', { day: '2-digit' });

  return (
    <div className='expenses-date'>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
};

export default ExpensesDate;
