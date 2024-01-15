import React, { useState } from 'react';
import './ExpensesItem.css';
import Card from './Card';
import ExpensesDate from './ExpensesDate';

const ExpensesItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('New Title');
  };

  return (
    <Card className='expense-item'>
      <ExpensesDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expenses-itemprice'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpensesItem;
