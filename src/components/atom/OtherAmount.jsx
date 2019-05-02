import React from 'react'

function OtherAmount(props) {
  const {customAmount, handleChange} = props
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
          value={customAmount} 
          onChange={handleChange}
          />
      </div>
    </div>
  );
}

export default OtherAmount


