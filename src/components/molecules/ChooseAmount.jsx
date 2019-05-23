import React from 'react'

import Amount from '../atom/Amount'
import OtherAmount from '../atom/OtherAmount';

function ChooseAmount (props) {
  const {amount, chooseAmount} = props
    return (
        <div>
          <div className="selectionRow">
            <Amount 
              value={10}
              amount={amount}
              handleChange={chooseAmount}
            />
            <Amount 
              value={20}
              amount={amount}
              handleChange={chooseAmount}
            />
            <Amount 
              value={50}
              amount={amount}
              handleChange={chooseAmount}
            />
          </div>
          <div className="selectionRow">
            <Amount 
              value={100}
              amount={amount}
              handleChange={chooseAmount}
            />
            <Amount 
              value={250}
              amount={amount}
              handleChange={chooseAmount}
            />
            <Amount 
              value={500}
              amount={amount}
              handleChange={chooseAmount}
            />
          </div>
          <div className="selectionRow">
            <OtherAmount value={amount}
              handleChange={chooseAmount}/>
          </div>
        </div>
    );
  }

export default ChooseAmount
