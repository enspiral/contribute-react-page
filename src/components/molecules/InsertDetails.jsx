import React from 'react'

import FirstName from "../atom/FirstName.jsx";
import LastName from "../atom/LastName.jsx";
import EmailAddress from "../atom/EmailAddress.jsx";
import CreditCardInfo from "../molecules/CreditCardInfo.jsx";

function InsertDetails (props) {
  const {firstname, lastname, email, updateDetails, submitToStripe} = props
    return (
      <div>
       <fieldset> 
          <legend>Please fill in your details below</legend>
          <form form id='contributeForm' className='form' onSubmit={submitToStripe}>
              <FirstName firstname={firstname} onChange={updateDetails}/>
              <LastName lastname={lastname} onChange={updateDetails}/>
              <EmailAddress email={email} onChange={updateDetails}/>
              <CreditCardInfo />
            </form>
          </fieldset>
      </div>
    );
  }

export default InsertDetails
