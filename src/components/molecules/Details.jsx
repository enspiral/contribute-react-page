import React, { Component } from 'react'

import { config } from '../../config'

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

class Details extends Component {
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
  render() {
    return (
      <fieldset>
        <div className='row stepsHeader'>
          <p>Amount</p>
          <p>Details</p>
          <p>Payment</p>
        </div>
        <form id='contributeForm' className='form'>
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
          <div className='formFooter'>
            <div className='row'>
              <button>Edit Amount</button>
              <button>Payment</button>
            </div>
          </div>
        </form>
      </fieldset>
    )
  }
}

export default Details
