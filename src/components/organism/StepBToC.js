import React, { Component } from 'react'

import StepsHeader from '../atom/StepsHeader'
import InsertDetails from '../molecules/InsertDetails'
import MakePayment from '../molecules/MakePayment'

class StepBToC extends Component {
  // onSubmit needs to send data amount. It also need to hide the current form and retreive the Details Form
  render () {
    return (
      <div className='cardBody'>
         <fieldset> 
          <StepsHeader stepTwo='boldStep' />
           <form id="contributeForm" className="form">
            <InsertDetails />
            <div className="formFooter">
            <button className='editBtn'>&larr; Edit Amount</button>
            <button>Payment &rarr;</button>
          </div>
            </form>
        </fieldset>
        <MakePayment />
      </div>
    )
  }
}

export default StepBToC
