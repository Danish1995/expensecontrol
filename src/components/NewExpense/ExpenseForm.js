import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnterTitle] = useState("");
  const [enteredAmount, setEnterAmount] = useState("");
  const [enteredDate, setEnterDate] = useState("");

  // multiple state to single state
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  // });

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);

    // multiple state calling in changehandler function
    // setUserInput({
    //   ...userInput,
    //   enteredTitle:event.target.value
    // })

    // setUserInput((prevState)=>{
    //   return {...prevState, enteredTitle:event.target.value}
    //   // use this approache when ever our state depend on the previous state
    //   //prevState here will always provdie you the  latest state but both approaches are ok but it is more safer
    // })
  };
  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);

    // multiple state calling in changehandler function
    // setUserInput({
    //   ...userInput,
    //   enteredTitle:event.target.value
    // })
  };
  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
  };
  const submitHandler=(event)=>{
    event.preventDefault();
    const expenseData={
      //this is  approach from simple state 
      title: enteredTitle,
      amount:enteredAmount,
      date: new Date (enteredDate)
      //this is  approach from multiple state with setUserInput function 
      // title: enteredTitle,
      // amount:enteredAmount
    };
    props.onSaveExpenseData(expenseData);
     /* important to notice 
     this onsaveexpensedata function is itself pointing another fuction in newexpense.js file we can say
     it behaves like the same function where it is poiting so appearntly it does not have any parameters
     but it can take parameters because the function on which it points has parameters.
     two way binding ( clearing the input field and form data)  */
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };
  return (
    <form onSubmit={submitHandler}>{/*this is a defauld behaviour to submit a form*/}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          
          <input type="number" value={enteredAmount} onChange={amountChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} min="2019-01-01"></input>
        </div>
      </div>
      <div className="new-expens__actions">
        <button type="submit">Add Expense</button>{/*this is not a default behaviour to submit a form*/}
      </div>
    </form>
  );
};
export default ExpenseForm;
