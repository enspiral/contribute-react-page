import React, { Component } from 'react'
import { injectStripe, CardElement } from 'react-stripe-elements'

import '../App.css'

class ContributeForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      amount: 0
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

  // TODO: validatins on the email field
  render () {
    return (
      <div className="App">
        <span className='header'>Contribute to Enspiral!</span>
        <form className='contributeForm' onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type='text' className='button' value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
          </label>
          <label>
            Email:
            <input type='text' className='button' value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
          </label>
          <label>
            Amount:
            <input type='number' className='button' value={this.state.amount} onChange={(e) => this.setState({ amount: e.target.value })} />
          </label>
          <CardElement className='Card' />
          <input type='submit' className='button' value='CONTRIBUTE' />
        </form>
      </div>
    )
  }
}

export default injectStripe(ContributeForm)
