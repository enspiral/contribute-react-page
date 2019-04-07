import React, { Component } from 'react'
import { injectStripe, CardElement } from 'react-stripe-elements'

import { config } from '../config'

const cardStyle = {
  base:{
    color: '#fff',
    '::placeholder': {
      color: '#fff'
    },
    iconColor: '#fff'
  }
}

const postCharge = (payload) => {
  console.log('Posting charge: ', payload.amount)
  return fetch(config.chargeProcessor, {
    body: JSON.stringify(payload),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST'
  })
  .then(response => {
    console.log('Success: ', response)
  })
  .catch(error => console.error('Error:', error))
}

class ContributeForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      amount: null
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.stripe) {
      const name = this.state.name
      this.props.stripe.createToken({ name })
      .then((payload) => {
        console.log('[token]', payload)
        return postCharge(Object.assign(payload, this.state))
      })
      .then(response => { 
        alert('Thank you for your contribution - we have sent you a confirmation email')
        this.setState({
          name: '',
          email: '',
          amount: null
        })
      })
      .catch(error => console.error('Error:', error))
      } else {
        console.log("Stripe.js hasn't loaded yet.");
      }
  }

  // TODO: validations on the email field
  render () {
    return (
      <div className="contributeContainer">
        <div className='formHeader'><p>Contributing $__ to Ensprial</p></div>
      </div>
    )
  }
}

export default injectStripe(ContributeForm)

