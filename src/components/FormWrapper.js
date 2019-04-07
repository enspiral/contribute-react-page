import React, { Component } from 'react'
import { Elements } from 'react-stripe-elements'

import '../styles/css/App.css'

// import ContributeForm from './ContributeForm'
import ContributeFormV2 from './ContributeFormV2'

class FormWrapper extends Component {
  render () {
    return (
      <Elements className='contributeWrapper'>
        {/* <ContributeForm /> */}
        <ContributeFormV2 />
      </Elements>
    )
  }
}

export default FormWrapper
