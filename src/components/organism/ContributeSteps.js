import React, { Component } from 'react'

import Amount from '../molecules/Amount.jsx'
import Details from '../molecules/Details.jsx'
import Payments from '../molecules/Payments.jsx'

class ContributeSteps extends Component {
  render () {
    return (
      <div>
        <Amount />
        <Details />
        <Payments />
      </div>
    )
  }
}

export default ContributeSteps
