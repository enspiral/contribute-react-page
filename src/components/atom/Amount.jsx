import React from 'react'

function Amount(props) {
  const {amount, value, handleChange} = props
  const intAmount = Number.parseInt(amount)
  return (
    <label className="selectContribAmount">${value}
      <input 
        id={"amount-" + value} 
        // style={value === intAmount ? {BackgroundColor: "red"} }
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
