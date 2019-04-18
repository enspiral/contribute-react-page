import React, { Component } from 'react'
import { injectStripe, CardElement } from 'react-stripe-elements'

import { config } from '../../config'

import StepsHeader from '../atom/StepsHeader'
import InsertDetails from '../molecules/InsertDetails'
import StepAToB from './StepAToB'

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

class StepBToC extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      amount: null,
      isHidden: true,
      showAmount: false
    }
  }
  showPreviousStep(e) {
    e.preventDefault();
    this.setState({
      showAmount: !this.state.showAmount
    })
  }
  showNextStep(e) {
    e.preventDefault();
    this.setState({
      isHidden: !this.state.isHidden
    })
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

  render () {
    return (
      <div className='cardBody'>
        {/* {!this.state.isHidden && <StepAToB />} */}
         {!this.state.isHideen && <fieldset id="insertDetails"> 
          <StepsHeader stepTwo='boldStep' />
          <form form id='contributeForm' className='form' onSubmit={this.handleSubmit}>
            <InsertDetails />
            <div id="card">
              <p>Pay by credit card or debit card</p>
                <CardElement style={cardStyle}
                elementRef={c => (this._element = c)}
              />
            </div>
            <div className="row terms">
              <h5>
                By contributing funds to Enspiral you agree to{" "}
                <a target="_blank" alt="Terms of Service" href={config.terms}>
                  these terms.
                </a>{" "}
              </h5>
            </div>
            <div className="formFooter">
              <button onClick={this.showNextStep.bind(this)} className='editBtn'>&larr; Edit Amount</button>
              <button>Confirm Payment</button>
            </div>
          </form>
         </fieldset> 
         }
      </div>
    )
  }
}

export default injectStripe(StepBToC)
