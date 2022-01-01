import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
function Expenses(props) {
  const title = props.temp.title;
  const amount = props.temp.amount;
  const date = props.temp.date;
  return(
  <Card>
    <ExpenseItem title={title} amount={amount} date={date}></ExpenseItem>
  </Card>
  );
}
export default Expenses;
