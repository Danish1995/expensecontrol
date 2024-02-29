import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";
const ExpenseItem=(props)=> {
  // props used as single parameter which receive all the data this compoent receive adn then use

const [title, setTitle]=useState(props.title);
  const clickHandler=()=>{
    setTitle("abc");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Button</button>
    </Card>
  );
}

export default ExpenseItem;
//export is necessary if we need to use in other pages
