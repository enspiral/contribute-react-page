import React from 'react'

import Amount from '../atom/Amount'
import OtherAmount from '../atom/OtherAmount';

function ChooseAmount (props) {
  const {amount, updateAmount} = props
    return (
        <div>
          <div className="selectionRow">
            <Amount 
              value={10}
              amount={amount}
              handleChange={updateAmount}
            />
            <Amount 
              value={20}
              amount={amount}
              handleChange={updateAmount}
            />
            <Amount 
              value={50}
              amount={amount}
              handleChange={updateAmount}
            />
          </div>
          <div className="selectionRow">
            <Amount 
              value={100}
              amount={amount}
              handleChange={updateAmount}
            />
            <Amount 
              value={250}
              amount={amount}
              handleChange={updateAmount}
            />
            <Amount 
              value={500}
              amount={amount}
              handleChange={updateAmount}
            />
          </div>
          <div className="selectionRow">
            <OtherAmount value={amount}
              handleChange={updateAmount}/>
          </div>
        </div>
    );
  }

export default ChooseAmount
