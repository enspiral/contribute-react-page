import React from 'react'

function FormFooter(props) {
  const {paymentStep, stepOne, stepTwo, processPayment, isLoading} = props
  return (
    <div>
      {paymentStep === 1 && <div className="formFooter">
         <button onClick={stepOne} type="submit">Details &rarr;</button>
      </div>}
      {paymentStep === 2 && <div className="formFooter">
        <button onClick={stepTwo} className='editBtn'>&larr; Edit Amount</button>
        <button onClick={processPayment} disabled={isLoading}>
          {!isLoading && "Confirm Payment"}
          {isLoading && "Processing..."}
        </button>
      </div>}
      {paymentStep === 3 && <div className="formFooter">
        <button>Questions? Contact us</button>
      </div>}
    </div>
    )
  }
  
export default FormFooter