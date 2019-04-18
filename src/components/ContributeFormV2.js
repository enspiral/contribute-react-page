import React, { Component } from 'react'
// import { injectStripe } from 'react-stripe-elements'

// import { config } from '../config'

import PaymentSteps from './organism/PaymentSteps'

class ContributeForm extends Component {
  render () {
    return (
      <div className="contributeContainer">
        <div className='formHeader'><p>Contributing AMOUNT to Ensprial</p></div>
        <PaymentSteps />
      </div>
    )
  }
}

export default ContributeForm

