import React from 'react'

function OtherAmount(props) {
  const {value, handleChange} = props
  const intValue = value == 0 ? '' : value / 100
  return (
    <div className='otherAmount'>
      <div className="customAmount">
        <label>Other amount</label>
      </div>
      <div className="insertAmount">
        <p>$</p>
        <input 
          placeholder="NZD"
          name="customAmount" 
          id="customAmount"
          data-testid="custom-amount-input" 
          type="number" 
          min="0" 
          step="1"  
          value={intValue} 
          onChange={handleChange}
          />
      </div>
    </div>
  );
}

export default OtherAmount


