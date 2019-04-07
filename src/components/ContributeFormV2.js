import React, { Component } from 'react'
import { injectStripe, CardElement } from 'react-stripe-elements'

// import { config } from '../config'

import ContributeSteps from './organism/ContributeSteps.js'

// const postCharge = (payload) => {
//   console.log('Posting charge: ', payload.amount)
//   return fetch(config.chargeProcessor, {
//     body: JSON.stringify(payload),
//     headers: {
//       'content-type': 'application/json'
//     },
//     method: 'POST'
//   })
//   .then(response => {
//     console.log('Success: ', response)
//   })
//   .catch(error => console.error('Error:', error))
// }

class ContributeForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    // if (this.props.stripe) {
    //   const name = this.state.name
    //   this.props.stripe.createToken({ name })
    //   .then((payload) => {
    //     console.log('[token]', payload)
    //     return postCharge(Object.assign(payload, this.state))
    //   })
    //   .then(response => { 
    //     alert('Thank you for your contribution - we have sent you a confirmation email')
    //     this.setState({
    //       name: '',
    //       email: '',
    //       amount: null
    //     })
    //   })
    //   .catch(error => console.error('Error:', error))
    //   } else {
    //     console.log("Stripe.js hasn't loaded yet.");
    //   }
  }

  render () {
    return (
      <div className="contributeContainer">
        <div className='formHeader'><p>Contributing AMOUNT to Ensprial</p></div>
        <ContributeSteps />
      </div>
    )
  }
}

export default injectStripe(ContributeForm)

