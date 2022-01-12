import React from 'react';
import ExpenseForm from "../forms/ExpenseForm";
import "./NewExpense.css";
import Card from "../UI/Card";

const NewExpense = () => {
    return(
        <Card className='new-expense'>
            <ExpenseForm />
        </Card>
    );
}

export default NewExpense;