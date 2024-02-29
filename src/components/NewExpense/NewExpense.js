import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
     
      id: Math.random().toString(),
      ...enteredExpenseData,
    };

    props.onDataRecive(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      {/* here onSaveExpenseData  is poiting at saveExpenseDataHandler on the next component we call the
      onSaveExpenseData with someparametre becaues this functin will behace same as the fuction where it
      points  */}
    </div>
  );
};

export default NewExpense;
