import React, { Component } from 'react'
import { StripeProvider } from 'react-stripe-elements'

import { config } from './config.js'
import FormWrapper from './components/FormWrapper'

class App extends Component {
  render () {
    return (
      process.env.NODE_ENV === 'development'
        ? <StripeProvider apiKey={config.stripeProdApiKey}>
          <FormWrapper />
        </StripeProvider>
        : <StripeProvider apiKey={config.stripeProdApiKey}>
          <FormWrapper />
        </StripeProvider>
    )
  }
}

export default App
