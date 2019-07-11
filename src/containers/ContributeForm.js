import React, { Component } from 'react'
import { injectStripe } from 'react-stripe-elements'
import { config } from '../config'

import OrganisimContributeForm from '../components/organisms/ContributeForm'

import '../styles/css/App.css'

const chargeProcessor = process.env.NODE_ENV === 'development' ? config.chargeProcessorTest : config.chargeProcessorLive

const postCharge = (payload, updateState) => {
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
        updateState({
          paymentStep: 101
        })
        console.log('ERROR: ', response)
      } else if (response.status === 204) {
        updateState({
          paymentStep: 3,
          isLoading: false
        })
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
      isLoading: false,
      disableConfirm: true,
      ccNumberEmptyOrError: true,
      ccExpireryEmptryOrError: true,
      ccCVCEmptyOrError: true
    }
    this.updateState = this.updateState.bind(this)
    this.updateAmount = this.updateAmount.bind(this)
    this.updateDetails = this.updateDetails.bind(this)
    this.submitToStripe = this.submitToStripe.bind(this)
    this.setLoadingTrue = this.setLoadingTrue.bind(this)
    this.updateConfirm = this.updateConfirm.bind(this)
  }
  updateState (newState) {
    this.setState(newState)
  }
  resetStep () { 
    this.updateState({
      paymentStep: 1
    })
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
  setLoadingTrue() {
    this.updateState({
      isLoading: true,
      disableConfirm: true
    })
  }
  updateConfirm() {
    this.updateState({
      disableConfirm: this.ccNumberEmptyOrError + this.ccExpireryEmptryOrError + this.ccCVCEmptyOrError
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
      this.props.stripe.createToken({name})
      .then((token) => {
        return postCharge(Object.assign(token, postDetails), this.updateState)
      })
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  }
  render () {
    return (
      <OrganisimContributeForm
        paymentStep={this.state.paymentStep}
        setLoadingTrue={this.setLoadingTrue}
        submitToStripe={this.submitToStripe}
        isLoading={this.state.isLoading}
        amount={this.state.amount}
        firstname={this.state.firstname}
        lastname={this.state.lastname}
        email={this.state.email}
        disableConfirm={this.state.disableConfirm}
        resetStep={() => this.resetStep()}
        incrementStep={() => this.incrementStep()}
        decrementStep={() => this.decrementStep()}
        updateConfirm={() => this.updateConfirm()}
        updateDetails={this.updateDetails}
        updateAmount={this.updateAmount}
        updateState={this.updateState}
      />
    )
  }
}

export default injectStripe(ContributeForm)
