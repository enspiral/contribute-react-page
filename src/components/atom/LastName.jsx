import React from 'react'

function LastName (props) {
  const { lastname, onChange } = props
  return (
    <div className="row">
      <div className="field">
        <label>Last name</label>
        <input
          name="lastname"
          className="input"
          type="text"
          placeholder="Your lastname here"
          required
          value={lastname}
          onChange={onChange}
        />
      </div>
    </div>

  )
}

export default LastName
