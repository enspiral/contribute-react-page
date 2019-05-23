import React from 'react'

import StepOne from "../atom/StepOne.jsx"
import StepTwo from "../atom/StepTwo.jsx"
import StepThree from "../atom/StepThree.jsx"

function StepsHeader (props) {
  const { paymentStep } = props
  return (
    <div>
     {paymentStep === 1 &&  <div className="stepsHeader">
        <StepOne boldStep="boldStep"/>
        <StepTwo />
        <StepThree />
      </div>
      }
     {paymentStep === 2 &&  <div className="stepsHeader">
        <StepOne />
        <StepTwo boldStep="boldStep"/>
        <StepThree />
      </div>
      }
     {paymentStep === 3 &&  <div className="stepsHeader">
        <StepOne />
        <StepTwo />
        <StepThree boldStep="boldStep"/>
      </div>
      }
    </div>
  )
} 

export default StepsHeader