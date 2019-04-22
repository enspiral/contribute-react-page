import React from 'react'

function OtherAmount() {
  return (
    <div className="row">
      <div className="customAmount">
        <label for="customAmount">Other amount</label>
      </div>
      <div className="insertAmount">
        <div className="customInput"><span>$</span></div>
        <input name="customAmount" id="customAmount" data-testid="custom-amount-input" type="number" min="0" step="1" className="form-control" value="" />
      </div>
    </div>
  );
}

export default OtherAmount


