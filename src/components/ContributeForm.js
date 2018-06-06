import React, { Component } from 'react'
import { injectStripe, CardElement } from 'react-stripe-elements'

import '../App.css'

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
    const name = this.state.name
    this.props.stripe.createToken({ name })
      .then((payload) => {
        const payloadForServer = Object.assign(payload, this.state)
        // post the payloadForServer to our server, and then charge the user's card with the given amount via Stripe's Charge API
        // see https://stripe.com/docs/charges
      })
  }

  // TODO: validations on the email field
  render () {
    return (
      <div className="contributeContainer">
        <form className='form' onSubmit={this.handleSubmit}>
          <input type='text' className='button' placeholder='Name' value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
          <input type='text' className='button' placeholder='Email' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
          <input type='number' className='button' placeholder='Amount' value={this.state.amount} onChange={(e) => this.setState({ amount: e.target.value })} />
          <CardElement className='card' />
          <input type='submit' className='button' value='CONTRIBUTE' />
        </form>
      </div>
    )
  }
}

export default injectStripe(ContributeForm)
