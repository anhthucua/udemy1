import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear)
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler}/>
      {
        // expenses.map((item) => 
        //   <ExpenseItem
        //     title={item.title}
        //     date={item.date}
        //     amount={item}
        //   />
        // )
      }
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
    
    </Card>
  );
}

export default Expenses;