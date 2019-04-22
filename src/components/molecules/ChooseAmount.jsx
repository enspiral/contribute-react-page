import React from 'react'

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
                <AmountFirstRow amount={defaultAmount} onChange={chooseAmount}/>
                <AmountSecondRow />
              </div>
                <OtherAmount />
            </form>
        </fieldset>    
      </div>
    );
  }

export default ChooseAmount
