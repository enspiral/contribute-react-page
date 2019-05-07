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
      </div>
    );
  }

export default InsertDetails
