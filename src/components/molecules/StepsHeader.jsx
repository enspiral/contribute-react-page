import React from 'react'

import StepOne from "../atom/StepOne.jsx"
import StepTwo from "../atom/StepTwo.jsx"

function StepsHeader (props) {
  const { paymentStep } = props
  return (
    <div className="stepsHeader">
      {paymentStep === 1 && 
      <StepOne stepOne='boldStep'/> 
      }
      {paymentStep === 2 && <StepTwo stepTwo='boldStep'/>}
    </div>
  )
} 

export default StepsHeader