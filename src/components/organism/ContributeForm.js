import React, { Component } from 'react'
import { injectStripe } from 'react-stripe-elements'

import { config } from '../../config'

import StepsHeader from '../molecules/StepsHeader'
import ContributeHeader from '../molecules/ContributeHeader';
import FormStepper from '../molecules/FormStepper';
import FormFooter from '../molecules/FormFooter';

// to-do: update with test charge processor url
const chargeProcessor = process.env.NODE_ENV === 'development' ? config.chargeProcessorTest : config.chargeProcessorLive

const postCharge = payload => {
  console.log(payload)
  console.log('Posting charge: ', payload.amount)
  return fetch(chargeProcessor, {
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST'
  })
    .then(response => {
      if (response.status === 500) {
        console.log('ERROR: ', response)
      } else if (response.status === 204) {
        console.log('SUCCESS: ', response)
      } else {
        console.log('RESPONSE: ', response)
      }
    })
    .catch(error => console.error('Error:', error))
}

class ContributeForm extends Component {
  constructor () {
    super()
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      amount: '',
      paymentStep: 1,
      isBtnDisabled: false
    }
    this.updateState = this.updateState.bind(this)
    this.updateAmount = this.updateAmount.bind(this)
    this.updateDetails = this.updateDetails.bind(this)
    this.submitToStripe = this.submitToStripe.bind(this)
    this.isDisableBtn = this.isDisableBtn.bind(this)
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
        amount: e.target.value * 100
    })
  }
  updateDetails (e) {
    this.updateState({
        [e.target.name]: e.target.value
    })
  }
  isDisableBtn() {
    this.updateState({
      paymentStep: this.state.paymentStep + 1,
      isBtnDisabled: true
    })
  }
  submitToStripe (e) {
    e.preventDefault()
    const postDetails = {
      name: this.state.firstname + ' ' + this.state.lastname,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      amount: this.state.amount,
      email: this.state.email
    }
    if (this.props.stripe) {
      const name = this.state.firstname + ' ' + this.state.lastname
      this.props.stripe.createToken({
          name
        })
        .then((token) => {
          console.log('[token]', token)
          return postCharge(Object.assign(token, postDetails))
        })
        .then(response => {
          // console.log("Thank you for supporting Enspiral. Your payment has been processed.")
          alert('Thank you for supporting Enspiral. Your payment has been processed. We have sent you a confirmation email.' )
          this.updateState({
              firstname: '',
              lastname: '',
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
        <div className="formWrapper">
          <StepsHeader paymentStep={this.state.paymentStep} />
          <fieldset>
            {/* <legend>Please choose an amount you would like to contribute</legend> */}
            <form
              id="contributeForm"
              className="form"
              onSubmit={this.submitToStripe}
            >
              <FormStepper
                paymentStep={this.state.paymentStep}
                amount={this.state.amount}
                firstname={this.state.firstname}
                lastname={this.state.lastname}
                email={this.state.email}
                chooseAmount={this.updateAmount}
                updateDetails={this.updateDetails}
                submitToStripe={this.submitToStripe}
              />
              <FormFooter
                paymentStep={this.state.paymentStep}
                stepOne={() => this.incrementStep()}
                stepTwo={() => this.decrementStep()}
                handleSubmit={this.submitToStripe}
                disableBtn={this.disableBtn}
                isBtnDisabled={this.state.isBtnDisabled}
              />
            </form>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default injectStripe(ContributeForm)