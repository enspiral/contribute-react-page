import React from 'react'

function ThankYou(props) {
  const {firstname} = props
  return (
    <fieldset>
      <div className="thankYou">
        <div>
          <h1>Thank you, {firstname}!</h1>
          Your payment has been processed. We have sent you a confirmation
          email. Any questions please do not hesitate to contact us at {' '}
          <a href="mailto:contact@enspiral.com">contact@enspiral.com</a>
          <p>We really appreciate your support.</p>
        </div>
      </div>
    </fieldset>
  );
}

export default ThankYou