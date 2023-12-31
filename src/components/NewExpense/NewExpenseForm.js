import React,{useState} from 'react'
import "./ExpenseForm.css"
function NewExpenseForm(props) {
  const [newExpenseData,setNewExpenseData]=useState({
    title:"",
    amount:"",
    date:"",
  });
  const [error,setError]=useState("");
  
  


  const FormOnSubmit=(e)=>{
        e.preventDefault();
        setError("");
        if(newExpenseData.title==="" ||
            newExpenseData.amount==="" ||
            newExpenseData.date===""){
                setError("please fill the input value!");
                return;
            }
        
        // console.log(newExpenseData);
        props.AccessNewExpense(newExpenseData);
        
        
        setNewExpenseData({
            title:"",
            amount:"",
            date:"",
        })

  }
  
  
  return (
    <form onSubmit={FormOnSubmit}>
      <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label className='new-expense__control label'>Title:</label>
                <input type='text' 
                        placeholder='Title'
                        value={newExpenseData.title} 
                        onChange={(e)=>{
                              setNewExpenseData((prev)=>{
                                    return {...prev,
                                    title:e.target.value}
                              })
                        }} 
                />
            </div>

            <div className='new-expense__control'>
                <label className='new-expense__control label'>Amount:</label>
                <input type='number' 
                      min="0.01" 
                      step="0.01" 
                      placeholder='Amount'
                      value={newExpenseData.amount}
                      onChange={(e)=>{
                          setNewExpenseData((prev)=>{
                              return {
                                ...prev,
                                amount:+e.target.value,
                              }
                          })
                      }}
                />
            </div>

            <div className='new-expense__control'>
                <label className='new-expense__control label'>Date:</label>
                <input type='date' min="2020-01-01" max="2023-12-31" 
                        value={newExpenseData.date}
                        onChange={
                          (e)=>{
                              setNewExpenseData((prev)=>{
                                return {
                                  ...prev,
                                  date:e.target.value,
                                }
                              })
                          }
                        }   
                />
            </div>
          
      </div>
      <p><b>{error}</b></p>
      
      <div className='new-expense__actions'>
            <button onClick={
              ()=>{
                props.onCancel()
              }
            }>Cancel</button>
            <button type='submit' >Add Expense</button>
      </div>
    </form>
  )
}

export default NewExpenseForm
