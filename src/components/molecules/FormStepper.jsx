import React from 'react'
// import ReactLoading from 'react-loading';

import ChooseAmount from './ChooseAmount'
import InsertDetails from './InsertDetails'
import ThankYou from './ThankYou'

function FormStepper(props) {
  const { paymentStep, ...otherProps } = props
  return (
    <div className="">
      {paymentStep === 1 && <ChooseAmount {...otherProps} />}
      {paymentStep === 2 && <InsertDetails {...otherProps} />}
      {/* <ReactLoading ty */}
      {paymentStep === 3 && <ThankYou />}
      {/* <ThankYou /> */}
    </div>
  )
}

export default FormStepper