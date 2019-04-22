import React from 'react'

function AmountFirstRow(props) {
      const {defaultAmount, chooseAmount} = props
  return (
      <div className="selectionRow">
        <lable className="selectContribAmount">$10
              <input 
                  id="amount-10" 
                  type="radio" 
                  name={defaultAmount} 
                  value="10" 
                  checked={defaultAmount === "10"}
                  onChange={chooseAmount}
                  />
        </lable>
        <lable className="selectContribAmount">$20
              <input 
                  id="amount-20" 
                  type="radio" 
                  name="amount" 
                  value="20" 
                  />
        </lable>
        <lable className="selectContribAmount">$50
              <input 
                  id="amount-50" 
                  type="radio" 
                  name="amount" 
                  value="50" 
                  />
        </lable>
      </div>
  );
}

export default AmountFirstRow

