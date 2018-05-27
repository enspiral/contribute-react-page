import React, { Component } from 'react'
import { StripeProvider } from 'react-stripe-elements'

import { config } from './config.js'
import FormWrapper from './components/FormWrapper'
import './App.css'

class App extends Component {
  render () {
    return (
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_API_KEY}>
        <FormWrapper />
      </StripeProvider>
    )
  }
}

export default App
