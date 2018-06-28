import React, { Component } from 'react'
import { injectStripe, CardElement } from 'react-stripe-elements'

import '../App.css'
import { config } from '../config'

const cardStyle = {
  base:{
    '::placeholder': {
      color: '#fff'
    },
    iconColor: "#fff"
  }
}

const postCharge = (payload) => {
  return fetch(config.chargeProcessor, {
    body: JSON.stringify(payload),
    cache: 'no-cache',
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json'
    },
    method: 'POST',
    mode: 'cors'
  })
  .then(response => response.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response))
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
        postCharge(Object.assign(payload, this.state))
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
                  <input id="email" className="input" type="email" placeholder="youremail@email.com" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}/>
                </div>
                </div>
                <div className="row">
                  <div className="field">
                    <label for="amount">Amount</label>
                    <input id="amount" className="input" type="number" placeholder="$NZD" value={this.state.amount} onChange={(e) => this.setState({ amount: e.target.value })}/>
                  </div>
                </div>
                <label for="card">Card</label>
                  <div id="card" >
                    <CardElement style={cardStyle}/>
                  </div>
            <button type="submit" data-tid="">Contribute</button>
            <div className="row terms">
              <p>By contributing funds to Enspiral you agree to <a href={config.terms}>these terms</a> :)</p>
            </div>
          </form>
        </fieldset>
      </div>
    )
  }
}

export default injectStripe(ContributeForm)

