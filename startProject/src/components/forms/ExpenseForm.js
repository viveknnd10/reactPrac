import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    //here we are using multiple states which is also correct 
    //but if we have to use only one state then taht is below
    //const [titleChanged,setTitleChanged]=useState('');
    //const [dateChanged,setDateChanged]=useState('');
    //const [amountChanged,setAmountChanged]=useState('');

    //using only one state to update the 3 values
    const [userInput,setUserInput]=useState({
        enteredTitle:'',
        enteredAmount:'',
        enteredDate:'',
    });

    //but this above way has a problem i.e. it doesnt give the latest prev state, 
    //by mistake it can give an outdated state as well when we are updating multiple states at a time
    //const titleChangeHandler = (event) => {
    //    //setTitleChanged(event.target.value);
    //
    //    setUserInput({
    //        ...userInput,
    //        enteredTitle:event.target.value
    //    })
    //};
    //const dateChangeHandler = (event) => {
    //    //setDateChanged(event.target.value);
    //
    //    setUserInput({
    //        ...userInput,
    //        enteredDate:event.target.value
    //    })
    //}
    //
    //const amountChangeHandler = (event) => {
    //    //setAmountChanged(event.target.value);
    //
    //    setUserInput({
    //        ...userInput,
    //        enteredAmount:event.target.value
    //    })
    //}

    //here the prevState ensures that the latest previous state is passed
        const titleChangeHandler = (event) => {
                setUserInput((prevState) => {
                    return {
                    ...prevState,
                    enteredTitle:event.target.value,
                };
                });
            };

        const amountChangeHandler = (event) => {
            setUserInput((prevState) => {
                return {
                ...prevState,
                enteredAmount:event.target.value,
            };
            });
        };

        const dateChangeHandler = (event) => {
            setUserInput((prevState) => {
                return {
                ...prevState,
                enteredDate:event.target.value,
            };
            });
        };
        const submitHandler = (event) =>{
            event.preventDefault();

            const expenseData={
                title: userInput.enteredTitle,
                amount: userInput.enteredAmount,
                date: new Date(userInput.enteredDate)
             };
            props.onSaveExportParent(expenseData);
            setUserInput({
                enteredAmount:'',
                enteredDate:'',
                enteredTitle:'', 
            });
              
        }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                    type='text'
                    value={userInput.enteredTitle} 
                    onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                    type='number'
                    value={userInput.enteredAmount} 
                    min="0.01" 
                    step="0.01" 
                    onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                    type='date' 
                    value={userInput.enteredDate}
                    min="2019-01-01" 
                    max="2022-12-31" 
                    onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;