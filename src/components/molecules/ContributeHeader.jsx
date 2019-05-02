import React from 'react'

function ContributeHeader (props) {
  const {amount} = props
  const selectedAmount = amount ? amount : "Select Amount"
  
  return (
    <div className='formHeader'>
      <p>Contributing $<b>{selectedAmount}</b> to Ensprial</p>
    </div>
  )
}

export default ContributeHeader