import React from 'react'

function AmountSecondRow() {
  return (
      <div className="selectionRow">
          <lable className="selectContribAmount">$100
            <input id="amount-100" type="radio" name="amount" value="100"/>
          </lable>
          <lable className="selectContribAmount">$250
            <input id="amount-250" type="radio" name="amount" value="250"/>
          </lable>
          <lable className="selectContribAmount">$500
            <input id="amount-500" type="radio" name="amount" value="500"/>
          </lable>
      </div>
  );
}

export default AmountSecondRow


