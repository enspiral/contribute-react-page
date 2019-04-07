import React, { Component } from 'react'

class Amount extends Component {
  render() {
    return (
      <fieldset>
        <div className='row stepsHeader'>
          <p>Amount</p>
          <p>Details</p>
          <p>Payment</p>
        </div>
        <form id='contributeForm' className='form'>
          <div className='formFooter'>
            <button>Details</button>
          </div>
        </form>
      </fieldset>
    )
  }
}

export default Amount
