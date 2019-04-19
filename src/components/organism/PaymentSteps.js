import React, { Component } from 'react'
import { injectStripe, CardElement } from 'react-stripe-elements'
import merge from 'lodash/merge'

import { config } from '../../config'

import StepsHeader from '../molecules/StepsHeader'
import ChooseAmount from '../molecules/ChooseAmount'
import InsertDetails from '../molecules/InsertDetails'

const cardStyle = {
  base: {
    color: 'black',
    '::placeholder': {
      color: 'grey'
    },
    iconColor: 'black',
  }
}

const postCharge = payload => {
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

class PaymentSteps extends Component {
  // constructor () {
  //   super()
  //   this.state = {
  //     name: '',
  //     email: '',
  //     amount: '',
  //     step: 1
  //   }
  //   this.updateState = this.updateState.bind(this)
  // }
  // updateState (newState) {
  //   this.setState(merge(this.state, newState))
  // }

  // incrementStep (e) { 
  //   this.updateState({
  //     step: this.state.step + 1
  //   })
  // }
  // decrementStep (e) {
  //   this.updateState({
  //     step: this.state.step - 1
  //   })
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault()
  //   if (this.props.stripe) {
  //     const name = this.state.name
  //     this.props.stripe.createToken({
  //         name
  //       })
  //       .then((payload) => {
  //         console.log('[token]', payload)
  //         return postCharge(Object.assign(payload, this.state))
  //       })
  //       .then(response => {
  //         alert('Thank you for your contribution - we have sent you a confirmation email')
  //         this.updateState({
  //           name: '',
  //           email: '',
  //           amount: null
  //         })
  //       })
  //       .catch(error => console.error('Error:', error))
  //   } else {
  //     console.log("Stripe.js hasn't loaded yet.");
  //   }
  // }
  render () {
    return (
      <div className='cardBody'>
        {this.state.step === 1 && 
        <fieldset id="chooseAmount"> 
          <StepsHeader stepOne='boldStep' />
           <form id="contributeForm" className="form">
            <ChooseAmount />
            <div className="formFooter">
              <button onClick={() => this.incrementStep()}type="submit">Details &rarr;</button>
            </div>
            </form>
        </fieldset>
        }
        {this.state.step === 2 && <fieldset id="insertDetails"> 
          <StepsHeader stepTwo='boldStep' />
          <form form id='contributeForm' className='form' onSubmit={this.handleSubmit}>
            <InsertDetails />
            
            <div className="row terms">
              <h5>
                By contributing funds to Enspiral you agree to{" "}
                <a target="_blank" alt="Terms of Service" href={config.terms}>
                  these terms.
                </a>{" "}
              </h5>
            </div>
            <div className="formFooter">
              <button onClick={() => this.decrementStep()} className='editBtn'>&larr; Edit Amount</button>
              <button>Confirm Payment</button>
            </div>
          </form>
         </fieldset> 
        }
      </div>
    )
  }
}

export default injectStripe(PaymentSteps)