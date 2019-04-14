import React, { Component } from 'react'
// import { injectStripe } from 'react-stripe-elements'

// import { config } from '../config'

import StepAToB from './organism/StepAToB'

class ContributeForm extends Component {
  render () {
    return (
      <div className="contributeContainer">
        <div className='formHeader'><p>Contributing AMOUNT to Ensprial</p></div>
        <StepAToB />
      </div>
    )
  }
}

export default ContributeForm

