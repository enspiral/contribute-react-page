import React, { Component } from 'react'
import StepsHeader from '../molecules/StepsHeader'
import ContributeHeader from '../molecules/ContributeHeader';
import FormStepper from '../molecules/FormStepper';
import FormFooter from '../molecules/FormFooter';

function ContributeForm(props) {
  const { submitToStripe, ...otherProps } = props
  return (
    <div className="contributeContainer">
      <ContributeHeader amount={props.amount} />
      <div className="formWrapper">
        <StepsHeader {...otherProps}/>
        <fieldset>
          <form id="contributeForm" className="form" onSubmit={submitToStripe}>
            <FormStepper {...otherProps}/>
            <FormFooter {...otherProps}/>
          </form>
        </fieldset>
      </div>
    </div>
  )
}

export default ContributeForm