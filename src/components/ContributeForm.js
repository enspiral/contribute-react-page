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
      {/* <div className='sectionWrapper'>
        <div className='sectionButton'>Amount</div>
        <div className='sectionButton'>Details</div>
        <div className='sectionButton'>Payment</div>
      </div> */}
      <fieldset>
        <legend className='card-only'>Pay with card</legend>
          <form id='contributeForm' className='form' onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="field">
                <label for="name">Name</label>
                <input id="name" className="input" type="text" placeholder="Your Name" required value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}/>
              </div>
            </div>
            <div className="row">
              <div className="field">
                <label for="email">Email</label>
                <input id="email" className="input" type="email" placeholder="youremail@email.com" required value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}/>
              </div>
            </div>
            <div className="row">
              <div className="field">
                <label for="amount">Amount</label>
                <input id="amount" className="input" type="number" placeholder="$NZD" value={this.state.amount / 100} onChange={(e) => this.setState({ amount: e.target.value * 100 })}/>
              </div>
            </div>
            <label for="card">Card</label>
            <div id="card" >
              <CardElement style={cardStyle} elementRef={(c) => this._element = c}/>
            </div>
            <button>Contribute</button>
            <div className="row terms">
              <p>By contributing funds to Enspiral you agree to <a target="_blank" alt="Terms of Service" href={config.terms}>these terms</a> :)</p>
            </div>
          </form>
        </fieldset>
      </div>
    )
  }
}

export default injectStripe(ContributeForm)

