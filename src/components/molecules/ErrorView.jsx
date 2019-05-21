import React from 'react'

function ErrorView(props) {
  return (
    <fieldset>
      <div className="ErrorView">
        <div>
          <h1>Oops!</h1>
          Something has gone wrong {' '}
          <a href="mailto:contact@enspiral.com">contact@enspiral.com</a>
          {/* <p>We really appreciate your support.</p> */}
        </div>
      </div>
    </fieldset>
  );
}

export default ErrorView