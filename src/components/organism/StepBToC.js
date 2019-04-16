import React, { Component } from 'react'

import { config } from '../../config'

import StepsHeader from '../atom/StepsHeader'
import InsertDetails from '../molecules/InsertDetails'
import MakePayment from '../molecules/MakePayment'
// import StepAToB from './StepAToB'

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
      isHidden: true,
      // showAmount: false
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
      {/* {this.state.showAmount && <StepAToB />}  */}
         {this.state.isHidden && <fieldset id="insertDetails"> 
          <StepsHeader stepTwo='boldStep' />
           <form form id='contributeForm' className='form' onSubmit={this.handleSubmit}>
            <InsertDetails />
            <div className="formFooter">
            <button onClick={this.showPreviousStep.bind(this)} className='editBtn'>&larr; Edit Amount</button>
            <button onClick={this.showNextStep.bind(this)}>Payment &rarr;</button>
          </div>
            </form>
         </fieldset> }
      {!this.state.isHidden && <MakePayment />} 
      </div>
    )
  }
}

export default StepBToC
