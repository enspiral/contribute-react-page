import React from 'react'

function ContributeHeader (props) {
  const {amount} = props
  return (
    <div className='formHeader'>
      <p>Contributing <b>{amount}</b> to Ensprial</p>
    </div>
  )
}

export default ContributeHeader