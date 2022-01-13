import ExpenseItem from './ExpenseItem';
import './Expenses.css';
function Expenses(props) {
  const title = props.temp.title;
  const amount = props.temp.amount;
  const date = props.temp.date;
  return(
  <div className="expenses">
    <ExpenseItem title={title} amount={amount} date={date}></ExpenseItem>
  </div>
  );
}
export default Expenses;
