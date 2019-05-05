import React from 'react'

import ChooseAmount from './ChooseAmount'
import InsertDetails from './InsertDetails'

function FormStepper(props) {
  const { paymentStep, ...otherProps } = props
  return (
    <div className="">
      {paymentStep === 1 && <ChooseAmount {...otherProps} />}
      {paymentStep === 2 && <InsertDetails {...otherProps} />}
    </div>
  )
}

export default FormStepper