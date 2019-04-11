import React, { Component } from 'react'

import StepsHeader from '../atom/StepsHeader'

class Amount extends Component {
  render() {
    return (
      <fieldset>
        <StepsHeader stepOne='boldStep' />
        <form id="contributeForm" className="form">
          <div className="amountSelection">
            <div className="selectionRow">
              <lable className="contribAmountBtn">
                $10
                <input
                  id="amount-10"
                  type="radio"
                  name="amount"
                  value="10"
                />
              </lable>
              <lable className="contribAmountBtn">$20</lable>
              <lable className="contribAmountBtn">$50</lable>
            </div>
            <div className="selectionRow">
              <lable className="contribAmountBtn">$100</lable>
              <lable className="contribAmountBtn">$250</lable>
              <lable className="contribAmountBtn">$500</lable>
            </div>
          </div>
          <div className="formFooter">
            <button type="submit">Details &rarr;</button>
          </div>
        </form>
      </fieldset>
    );
  }
}

export default Amount
