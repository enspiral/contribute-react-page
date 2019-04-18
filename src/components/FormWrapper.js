import React, { Component } from 'react'
import { Elements } from 'react-stripe-elements'

import '../styles/css/App.css'

import ContributeForm from './organism/ContributeForm'

class FormWrapper extends Component {
  render () {
    return (
      <Elements className='contributeWrapper'>
        <ContributeForm />
      </Elements>
    )
  }
}

export default FormWrapper
