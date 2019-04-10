import React, { Component } from 'react'

class Amount extends Component {
  render() {
    return (
      <fieldset>
        <div className="stepsHeader">
          <p>Amount</p>
          <p>Details</p>
          <p>Payment</p>
        </div>
        <form id="contributeForm" className="form">
          <div className="amountSelection">
            <div className="selectionRow">
              <lable className="contribAmountBtn">$10</lable>
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
            <button>Details</button>
          </div>
        </form>
      </fieldset>
    );
  }
}

export default Amount
