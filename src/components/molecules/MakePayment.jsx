import React, { Component } from 'react'
import { injectStripe, CardElement } from 'react-stripe-elements'

import { config } from '../../config'

import StepsHeader from '../atom/StepsHeader'

const cardStyle = {
  base:{
    color: 'black',
    '::placeholder': {
      color: 'grey'
    },
    iconColor: 'black',
  }
}

class Payments extends Component {
  render() {
    return (
      <fieldset>
       <StepsHeader stepThree='boldStep'/>
        <form id='contributeForm' className='form' onSubmit={this.handleSubmit}>
          <div id="card">
          <p>Pay by credit card or debit card</p>
            <CardElement
              style={cardStyle}
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
            <button className='editBtn'>&larr; Edit Details</button>
            <button>Confirm Payment</button>
          </div>
        </form>
      </fieldset>
    );
  }
}

export default injectStripe(Payments)
