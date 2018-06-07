import React, { Component } from 'react'
import { injectStripe, CardElement } from 'react-stripe-elements'

import '../App.css'

const cardStyle = {
  base:{
  color: 'red',
  '::placeholder': {
    color: '#fff',
  },
  }
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
      <fieldset>
        <legend className='card-only'>Pay with card</legend>
          <form className='form' onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="field">
                  <label for="name">Name</label>
                  <input id="name" className="input" type="text" placeholder="Your Name" required="" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}/>
                </div>
              </div>
              <div className="row">
                <div className="field">
                  <label for="email">Email</label>
                  <input id="email" className="input" type="text" placeholder="youremail@email.com" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}/>
                </div>
                </div>
                <div className="row">
                  <div className="field">
                    <label for="amount">Amount</label>
                    <input id="amount" className="input" type="text" placeholder="$" value={this.state.amount} onChange={(e) => this.setState({ amount: e.target.value })}/>
                  </div>
                </div>
                <label for="card">Card</label>
                  <div id="card" >
                    <CardElement style={cardStyle}/>
                  </div>
            <button type="submit" data-tid="">Pay</button>
          </form>
        </fieldset>
      </div>
    )
  }
}

export default injectStripe(ContributeForm)

