import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'; 

const NewExpense = (props) => {
  const [openForm, setOpenForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
  }

  const openAddExpense = () => {
    setOpenForm(true);
  }

  const stopEditingHandler = () => {
    setOpenForm(false);
  }
 
  return (
    <div className='new-expense'>
      {
        openForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>
      }
  
      {
        !openForm && <button onClick={openAddExpense}>Add Expense</button>
      }
      
    </div>
  );
}

export default NewExpense;