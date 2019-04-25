import React from 'react'

function FormFooter(props) {
  const {paymentStep, stepOne, stepTwo, handleSubmit} = props
  return (
    <div>
      {paymentStep === 1 && <div className="formFooter">
         <button onClick={stepOne} type="submit">Details &rarr;</button>
      </div>}
      {paymentStep === 2 && <div className="formFooter">
        <button onClick={stepTwo} className='editBtn'>&larr; Edit Amount</button>
        <button onSubmit={handleSubmit}>Confirm Payment</button>
      </div>}
    </div>
    )
  }
  
export default FormFooter