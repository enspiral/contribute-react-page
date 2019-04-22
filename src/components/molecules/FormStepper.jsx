import React from 'react'

import ChooseAmount from './ChooseAmount'
import InsertDetails from './InsertDetails'

function FormStepper(props) {
  const { paymentStep, defaultAmount, updateAmount } = props
  return (
    <div className="">
      {paymentStep === 1 && <ChooseAmount updateAmount={updateAmount} defaultAmount={defaultAmount}/>}
      {paymentStep === 2 && <InsertDetails />}
    </div>
  )
}

export default FormStepper