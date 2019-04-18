import React from 'react'

import StepOne from "../atom/StepOne.jsx"
import StepTwo from "../atom/StepTwo.jsx"

function StepsHeader () {
  return (
    <div className="stepsHeader">
      <StepOne stepOne='boldStep'/>
      <StepTwo stepTwo='boldStep'/>
    </div>
  )
} 

export default StepsHeader