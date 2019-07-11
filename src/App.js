import React, { Component } from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'

import { config } from './config.js'
import ContributeForm from './containers/ContributeForm'

class App extends Component {
  render () {
    return (
      process.env.NODE_ENV === 'development'
        ? <StripeProvider apiKey={config.stripeTestApiKey}>
          <Elements>
            <ContributeForm />
          </Elements>
        </StripeProvider>
        : <StripeProvider apiKey={config.stripeLiveApiKey}>
          <Elements>
            <ContributeForm />
          </Elements>
        </StripeProvider>
    )
  }
}

export default App
