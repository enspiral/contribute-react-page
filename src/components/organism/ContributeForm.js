import React, { Component } from 'react'
import { injectStripe, CardElement } from 'react-stripe-elements'
import merge from 'lodash/merge'

// import { config } from '../../config'

import StepsHeader from '../molecules/StepsHeader'
import ContributeHeasder from '../molecules/ContributeHeader';
import FormStepper from '../molecules/FormStepper';
import FormFooter from '../molecules/FormFooter';



const postCharge = payload => {
  console.log('Posting charge: ', payload.amount)
  // return fetch(config.chargeProcessor, {
  //   body: JSON.stringify(payload),
  //   headers: {
  //     'content-type': 'application/json'
  //   },
  //   method: 'POST'
  // })
  //   .then(response => {
  //     console.log('Success: ', response)
  //   })
  //   .catch(error => console.error('Error:', error))
}

class ContributeForm extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      amount: 'Selected Amount',
      paymentStep: 1
    }
    this.updateState = this.updateState.bind(this)
  }
  updateState (newState) {
    this.setState(merge(this.state, newState))
  }

  incrementStep () { 
    this.updateState({
      paymentStep: this.state.paymentStep + 1
    })
  }
  decrementStep () {
    this.updateState({
      paymentStep: this.state.paymentStep - 1
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.stripe) {
      const name = this.state.name
      this.props.stripe.createToken({
          name
        })
        .then((payload) => {
          console.log('[token]', payload)
          return postCharge(Object.assign(payload, this.state))
        })
        .then(response => {
          alert('Thank you for your contribution - we have sent you a confirmation email')
          this.updateState({
            name: '',
            email: '',
            amount: ''
          })
        })
        .catch(error => console.error('Error:', error))
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  }
  render () {
    return (
        <div className="contributeContainer">
          <ContributeHeasder amount={this.state.amount} />
          <div className='formWrapper'>
            <StepsHeader />
            <FormStepper paymentStep={this.state.paymentStep}/>
            <FormFooter 
              paymentStep={this.state.paymentStep} 
              stepOne={() => this.incrementStep()} 
              stepTwo={() => this.decrementStep()}
              handleSubmit={this.handleSubmit}
            />
          </div>
      </div>
    )
  }
}

export default injectStripe(ContributeForm)