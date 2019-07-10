import React from 'react'

import Step from "../atom/Step.jsx"

function StepsHeader (props) {
  const { resetStep, paymentStep, decrementStep } = props
  return (
    <div>
     {paymentStep === 1 &&  <div className="stepsHeader">
        <Step text='&#10122; Amount' boldStep='boldStep'/>
        <Step text='&#10123; Details'/>
        <Step text='&#10124; Confirmed'/>
      </div>
      }
     {paymentStep === 2 &&  <div className="stepsHeader">
        <Step linkTo={decrementStep} text='&#10122; Amount'/>
        <Step text='&#10123; Details' boldStep='boldStep'/>
        <Step text='&#10124; Confirmed'/>
      </div>
      }
     {paymentStep === 3 &&  <div className="stepsHeader">
        <Step linkTo={resetStep} text='&#10122; Amount'/>
        <Step linkTo={decrementStep} text='&#10123; Details'/>
        <Step text='&#10124; Confirmed' boldStep='boldStep'/>
      </div>
      }
    </div>
  )
} 

export default StepsHeader