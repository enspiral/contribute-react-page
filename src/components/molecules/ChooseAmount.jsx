import React from 'react'

import Amount from '../atom/Amount'
import OtherAmount from '../atom/OtherAmount';

function ChooseAmount (props) {
  const {amount, chooseAmount} = props
    return (
      <fieldset id='chooseAmount'>
        <form id="contributeForm" className="form">
          <div className="selectionRow">
            <Amount 
              amount={10}
              handleChange={chooseAmount}
            />
            <Amount 
              amount={20}
              handleChange={chooseAmount}
            />
            <Amount 
              amount={50}
              handleChange={chooseAmount}
            />
          </div>
          <div className="selectionRow">
            <Amount 
              amount={100}
              handleChange={chooseAmount}
            />
            <Amount 
              amount={250}
              handleChange={chooseAmount}
            />
            <Amount 
              amount={500}
              handleChange={chooseAmount}
            />
          </div>
          <div className="selectionRow">
            <OtherAmount amount={amount}
              handleChange={chooseAmount}/>
          </div>
        </form>
    </fieldset>    
    );
  }

export default ChooseAmount
