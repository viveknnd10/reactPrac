import React from 'react';
import ExpenseForm from "../forms/ExpenseForm";
import "./NewExpense.css";
import Card from "../UI/Card";

const NewExpense = (props) => {
    const saveExportHandler=(enteredExpenseData)=>{
        const expenseData={
        ...enteredExpenseData,
        id:Math.random().toString(),
        };
        props.onSaveAddedExpense(expenseData);
    };
    return(
        <Card className='new-expense'>
            <ExpenseForm onSaveExportParent={saveExportHandler} />
        </Card>
    );
}

export default NewExpense;