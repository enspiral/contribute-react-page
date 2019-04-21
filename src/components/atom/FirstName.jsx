import React from 'react'

function FirstName (props) {
  const { firstname, onChange } = props
  return (
    <div className="row">
      <div className="field">
        <label for="name">First name</label>
        <input
          name="firstname"
          className="input"
          type="text"
            placeholder="Your first name here"
          required
          value={firstname}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default FirstName
