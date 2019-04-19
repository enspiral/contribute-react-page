import React from 'react'

function FirstName (props) {
  return (
    <div className="row">
                <div className="field">
                  <label for="name">First name</label>
                  <input
                    id="name"
                    className="input"
                    type="text"
                    placeholder="Your first Name"
                    required
                    value={this.state.name}
                    onChange={e => this.setState({ firstname: e.target.value })}
                  />
                </div>
              </div>

  )
}

export default FirstName
