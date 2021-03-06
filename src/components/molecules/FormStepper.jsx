import React from 'react'

import ChooseAmount from './ChooseAmount'
import InsertDetails from './InsertDetails'
import ThankYou from './ThankYou'
import ErrorView from './ErrorView'

function FormStepper(props) {
  const { paymentStep, ...otherProps } = props
  return (
    <div>
      {paymentStep === 1 && <ChooseAmount {...otherProps} />}
      {paymentStep === 2 && <InsertDetails {...otherProps} />}
      {paymentStep === 3 && <ThankYou {...otherProps}/>}
      {paymentStep === 101 && <ErrorView />}
    </div>
  )
}

export default FormStepper