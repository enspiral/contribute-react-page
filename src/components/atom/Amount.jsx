import React from 'react'

function Amount(props) {
  const {amount, value, handleChange} = props
  const intAmount = Number.parseInt(amount/100)
  const focusedBtn = value == intAmount 
    ? {backgroundColor: "#0064a2a7", 
      color: "white"} 
    : {backgroundColor: "white",
      color:"black"}
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
