import React, { Component } from 'react'

class Details extends Component {
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
            <div className='row'>
              <button>Edit Amount</button>
              <button>Payment</button>
            </div>
          </div>
        </form>
      </fieldset>
    )
  }
}

export default Details
