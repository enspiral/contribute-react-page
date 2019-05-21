import React from 'react'
import { whileStatement } from '@babel/types';

function Amount(props) {
  const {amount, value, handleChange} = props
  const intAmount = Number.parseInt(amount/100)
  const focusedBtn = value == intAmount 
    ? {backgroundColor: "grey", 
      color: "white"} 
    : {backgroundColor: "white"}
  return (
    <label 
      className="selectContribAmount" 
      style={focusedBtn}>
        ${value}
      <input 
        id={"amount-" + value} 
        type="radio" 
        name={"amount-" + value}
        value={value}
        checked={value === intAmount}
        onChange={handleChange}
        />
    </label>
  )
}

export default Amount
