import React from 'react'

function ErrorView(props) {
  return (
    <fieldset>
      <div className="ErrorView">
        <div>
          <h1>Oops!</h1>
          <p>Something has gone wrong in processing your contribution :(</p>
          <p>It is very likely your money is still in your account :)</p>
          <p>If not please get in touch at: <a href="mailto:contact@enspiral.com">contact@enspiral.com</a></p>
          <p>Or</p>
          <button onClick={()=>window.location.reload(true)}>Try again</button>
        </div>
      </div>
    </fieldset>
  );
}

export default ErrorView