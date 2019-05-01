import React from 'react'

function OtherAmount(props) {
  const {amount, handleChange} = props
  return (
    <div className='otherAmount'>
      <div className="customAmount">
        <label for="customAmount">Other amount</label>
      </div>
      <div className="insertAmount">
        <span>$</span>{}
        <input 
          name="customAmount" 
          id="customAmount" 
          data-testid="custom-amount-input" 
          type="number" 
          min="0" 
          step="1" 
          className="form-control" 
          value={amount} 
          onChange={handleChange}
          />
      </div>
    </div>
  );
}

export default OtherAmount


