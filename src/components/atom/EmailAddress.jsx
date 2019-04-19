import React from 'react'

function EmailAddress(props) {
  const { email, onChange } = props
  return (
    <div className="row">
      <div className="field">
        <label for="email">Email</label>
        <input
          name="email"
          className="input"
          type="email"
          placeholder="youremail@email.com"
          required
          value={email}
          onChange={onChange}
        />
      </div>
    </div>

  )
}

export default EmailAddress
