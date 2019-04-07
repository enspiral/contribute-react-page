import React, { Component } from 'react'
import { CardElement } from 'react-stripe-elements'

import { config } from '../../config'

const cardStyle = {
  base:{
    color: '#fff',
    '::placeholder': {
      color: '#fff'
    },
    iconColor: '#fff'
  }
}

class Payments extends Component {
  render() {
    return (
      <fieldset>
        <div className='row stepsHeader'>
          <p>Amount</p>
          <p>Details</p>
          <p>Payment</p>
        </div>
        <form id='contributeForm' className='form'>
          <div id="card" >
              <CardElement style={cardStyle} elementRef={(c) => this._element = c}/>
            </div>
            <div className="row terms">
              <p>By contributing funds to Enspiral you agree to <a target="_blank" alt="Terms of Service" href={config.terms}>these terms</a> :)</p>
            </div>
          <div className='row formFooter'>
            <button>Edit Details</button>
            <button>Confirm Payment</button>
          </div>
        </form>
      </fieldset>
    )
  }
}

export default Payments
