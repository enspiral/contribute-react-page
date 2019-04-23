import React from 'react'

import Amount from '../atom/Amount'
import AmountFirstRow from '../atom/AmountFirstrow';
import AmountSecondRow from '../atom/AmountSecondRow';
import OtherAmount from '../atom/OtherAmount';

function ChooseAmount (props) {
  const {defaultAmount, chooseAmount} = props
    return (
        <div>
          <fieldset id='chooseAmount'>
            <form id="contributeForm" className="form">
              <div className="amountSelection">
                <div className="selectionRow">
                  <Amount 
                    amount={10}
                    selected
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
                  <OtherAmount 
                    
                    handleChange={chooseAmount}/>
                </div>
              </div>
            </form>
        </fieldset>    
      </div>
    );
  }

export default ChooseAmount
