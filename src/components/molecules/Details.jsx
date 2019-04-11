import React, { Component } from 'react'

import { config } from '../../config'
import StepsHeader from '../atom/StepsHeader'


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
      firstname: '',
      lastname: '',
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
        <StepsHeader stepTwo='boldStep'/>
        <form id="contributeForm" className="form">
          <div className="row">
            <div className="field">
              <label for="name">First name</label>
              <input
                id="name"
                className="input"
                type="text"
                placeholder="Your first Name"
                required
                value={this.state.name}
                onChange={e => this.setState({ firstname: e.target.value })}
              />
            </div>
          </div>
          <div className="row">
            <div className="field">
              <label for="name">Last name</label>
              <input
                id="name"
                className="input"
                type="text"
                placeholder="Your last name"
                required
                value={this.state.name}
                onChange={e => this.setState({ lastname: e.target.value })}
              />
            </div>
          </div>
          <div className="row">
            <div className="field">
              <label for="email">Email</label>
              <input
                id="email"
                className="input"
                type="email"
                placeholder="youremail@email.com"
                required
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </div>
          </div>

          <div className="formFooter">
            <button className='editBtn'>&larr; Edit Amount</button>
            <button>Payment &rarr;</button>
          </div>
        </form>
      </fieldset>
    );
  }
}

export default Details
