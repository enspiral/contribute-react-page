import React from 'react'

function StepsHeader (props) {
  return (
    <div className="stepsHeader">
      <p className={props.stepOne}>&#10122; Amount</p>
      <p className={props.stepTwo}>&#10123; Details</p>
      <p className={props.stepThree}>&#10124; Payment</p>
    </div>
  )
} 

export default StepsHeader