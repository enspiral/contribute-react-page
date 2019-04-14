import React, { Component } from 'react'

import ChooseAmount from '../molecules/ChooseAmount'
import InsertDetails from '../molecules/InsertDetails'
// import Payment from '../molecules/Payment'

class StepAToB extends Component {
  // onSubmit needs to send data amount. It also need to hide the current form and retreive the Details Form
  render () {
    return (
      <div className='cardBody'>
          <ChooseAmount />
            <div className="formFooter">
              <button type="submit">Details &rarr;</button>
            </div>
        <InsertDetails />
      </div>
    )
  }
}

export default StepAToB
