import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
function ExpenseItem(props)
{
    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item">
            <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">RS{props.amount}</div>
    </Card>);
}

export default ExpenseItem;