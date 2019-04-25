import React from 'react'
import PropTypes from 'prop-types'

function Amount(props) {
  const {amount, handleChange} = props
  return (
    <label className="selectContribAmount">${amount}
      <input 
        id={"amount-" + amount} 
        type="radio" 
        name={"amount-" + amount}
        value={amount}
        checked={amount === "value"}
        onChange={handleChange}
        />
    </label>
  )
}

Amount.propTypes = {
  amount: PropTypes.number,
  selected: PropTypes.bool,
  handleChange: PropTypes.func
}

export default Amount
