import React from 'react'
import Chart from '../Chart/Chart'

function ExpenseChart(props) {
  const dataPoints=[
    {label:'Jan',value:0},
    {label:'Feb',value:0},
    {label:'Mar',value:0},
    {label:'Apr',value:0},
    {label:'May',value:0},
    {label:'Jun',value:0},
    {label:'Jul',value:0},
    {label:'Aug',value:0},
    {label:'Sep',value:0},
    {label:'Oct',value:0},
    {label:'Nov',value:0},
    {label:'Dec',value:0},
  ]


  for(const expense of props.expenses){
    const expenseMonth=expense.date.getMonth();//starting at 0=> January =>9
    //expenseMonth-,0-12
    dataPoints[expenseMonth].value+=expense.amount;

  }
    return (
    <div>
      <Chart dataPoints={dataPoints} />
    </div>
  )
}

export default ExpenseChart
