import React from 'react'

import StepsHeader from '../atom/StepsHeader'

function Amount () {
    return (
      <fieldset> 
        <StepsHeader stepOne='boldStep' />
        <form id="contributeForm" className="form">
            <div className="amountSelection">
              <div className="selectionRow">
                <lable className="selectContribAmount">
                  $10
                  <input id="amount-10" type="radio" name="amount" value="10"/>
                </lable>
                <lable className="selectContribAmount">$20
                <input id="amount-20" type="radio" name="amount" value="20"/></lable>
                <lable className="selectContribAmount">$50
                <input id="amount-50" type="radio" name="amount" value="50"/></lable>
              </div>
              <div className="selectionRow">
                <lable className="selectContribAmount">$100
                <input id="amount-100" type="radio" name="amount" value="100"/></lable>
                <lable className="selectContribAmount">$250
                <input id="amount-250" type="radio" name="amount" value="250"/></lable>
                <lable className="selectContribAmount">$500
                <input id="amount-500" type="radio" name="amount" value="500"/></lable>
              </div>
            </div>
        </form>
      </fieldset>
    );
  }

export default Amount
