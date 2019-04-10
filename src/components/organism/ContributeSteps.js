import React, { Component } from 'react'

import Amount from '../molecules/Amount.jsx'
import Details from '../molecules/Details.jsx'
import Payment from '../molecules/Payment'

class ContributeSteps extends Component {
  render () {
    return (
      <div className='cardBody'>
        <Amount />
        <Details />
        <Payment />
      </div>
    )
  }
}

export default ContributeSteps
