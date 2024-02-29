import Card from "../UI/Card";
import ExpenseItem from "./Expenseitem";
import { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  let filterInfoText = "2019 2021 2022";
  if (filteredYear === "2019") {
    filterInfoText = "2010 2021 2022";
  } else if (filteredYear === "2021") {
    filterInfoText = "2019 2020 2022";
  } else if (filteredYear === "2022") {
    filterInfoText = "2019 2020 2021";
  } else {
    filterInfoText = "2019 2021 2022";
  }

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.item.filter((expData) => {
    return expData.date.getFullYear().toString() === filteredYear;
  });
  // const filteredExpenses = props.items.filter(expense => {
  //   return expense.date.getFullYear().toString() === filteredYear;
  // });

  let expenseContentList = <p>No data found for you filter </p>;
  //we can save jsx in variable like this 

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <p>{filterInfoText}</p>
      {filteredExpenses.length === 0 && expenseContentList}
      {/* //the part after the && operator will be retunr as the result of this statemnet this is how we can use 
        if statment in java script */}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id} // better usage for listing updating so it tell brower where to update in the list
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}

      {/* we call a map on a value props.item and maps make a copy of the value here expense and then map runs the value numbers of the time it gets the props.item 
      object which is inside of the ()  */}
    </Card>
  );
}
export default Expenses;
