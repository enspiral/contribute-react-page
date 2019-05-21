import React from 'react'

function FormFooter(props) {
  const {paymentStep, stepOne, stepTwo, processPayment, isLoading} = props
  const positionRight = {
    float: "right", 
    marginLeft:"auto"
  }
  return (
    <div>
      {paymentStep === 1 && <div className="formFooter">
         <button onClick={stepOne} type="submit" style={positionRight}>Details &rarr;</button>
      </div>}
      {paymentStep === 2 && 
        <div className="formFooter">
        <button onClick={stepTwo} className='editBtn'>&larr; Edit Amount</button>
        <button onClick={processPayment} disabled={isLoading}>
          {!isLoading && "Confirm Payment"}
          {isLoading && <img alt='' src='https://gifimage.net/wp-content/uploads/2017/09/ajax-loading-gif-transparent-background-8.gif' height='18px' width='18px'/>}
          {isLoading && <span>Processing...</span>}
        </button>
      </div>}
    </div>
    )
  }
  
export default FormFooter