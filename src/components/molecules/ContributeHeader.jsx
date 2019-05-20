import React from 'react'

function ContributeHeader (props) {
  const {amount} = props
  const selectedAmount = amount / 100 ? amount / 100  : "Select Amount"
  
  return (
    <div className='formHeader'>
      <p  >Contributing $<b>{selectedAmount}</b> to Ensprial</p>
    </div>
  )
}

export default ContributeHeader