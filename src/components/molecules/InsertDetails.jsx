import React, { Component } from 'react'

class InsertDetails extends Component {
  constructor() {
    super()
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      amount: null
    }
  }
  render() {
    return (
      <div>
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
          <div className="row">
            <div className="field">
              <label for="name">Last name</label>
              <input
                id="name"
                className="input"
                type="text"
                placeholder="Your last name"
                required
                value={this.state.name}
                onChange={e => this.setState({ lastname: e.target.value })}
              />
            </div>
          </div>
          <div className="row">
            <div className="field">
              <label for="email">Email</label>
              <input
                id="email"
                className="input"
                type="email"
                placeholder="youremail@email.com"
                required
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </div>
          </div>
      </div>
    );
  }
}

export default InsertDetails
