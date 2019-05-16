import React from 'react'

import FirstName from "../atom/FirstName.jsx";
import LastName from "../atom/LastName.jsx";
import EmailAddress from "../atom/EmailAddress.jsx";
import CreditCardInfo from "../molecules/CreditCardInfo.jsx";

function InsertDetails (props) {
  const {firstname, lastname, email, updateDetails} = props
    return (
      <div>
          <FirstName firstname={firstname} onChange={updateDetails}/>
          <LastName lastname={lastname} onChange={updateDetails}/>
          <EmailAddress email={email} onChange={updateDetails}/>
          <CreditCardInfo />
        <h6>By contributing funds to Enspiral you agree to {' '}
          <a rel="noopener" alt="Terms of Service" href="https://handbook.enspiral.com/finances_variable_contributions.html">these terms.</a>{' '}  
          Have problems? Get in touch – <a href="mailto:foundation@enspiral.com">foundation@enspiral.com</a></h6>
      </div>
    );
  }

export default InsertDetails
