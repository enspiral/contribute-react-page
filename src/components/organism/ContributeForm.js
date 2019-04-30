import React, { Component } from 'react'
import { injectStripe} from 'react-stripe-elements'

// import { config } from '../../config'

import StepsHeader from '../molecules/StepsHeader'
import ContributeHeader from '../molecules/ContributeHeader';
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
      otherAmount:'',
      paymentStep: 1
    }
    this.updateState = this.updateState.bind(this)
    this.updateAmount = this.updateAmount.bind(this)
  }
  updateState (newState) {
    this.setState(newState)
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
  updateAmount (e) {
    this.updateState({
      amount: e.target.value
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
          <ContributeHeader amount={this.state.amount} />
          <div className='formWrapper'>
            <StepsHeader 
              paymentStep={this.state.paymentStep} 
              />
            <FormStepper 
              paymentStep={this.state.paymentStep}
              amount={this.state.amount}
              chooseAmount={this.updateAmount}
              />
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