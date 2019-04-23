import React from 'react'
import PropTypes from 'prop-types'

function Amount(props) {
  const {amount, selected, handleChange} = props
  return (
    <lable className="selectContributeAmount">${amount}
    <input 
      id={"amount-" + amount} 
      type="radio" 
      name={"amount-" + amount}
      value={amount}
      checked={selected}
      onChange={handleChange}
      />
    </lable>
  )
}

Amount.PropTypes = {
  amount: PropTypes.number,
  selected: PropTypes.bool,
  handleChange: PropTypes.func
}

export default Amount
