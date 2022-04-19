import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear)
  }

  const filterExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  })

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filterExpenses}/> 
      <ExpensesList items={filterExpenses}/>
    </Card>
  );
}

export default Expenses;