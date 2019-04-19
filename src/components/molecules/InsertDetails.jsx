import React, { Component } from 'react'

import CreditCardInfo from "../molecules/CreditCardInfo.jsx";

class InsertDetails extends Component {
  constructor() {
    super()
    this.state = {
      firstname: '',
      lastname: '',
      email: ''
    }
  }
  render() {
    return (
      <div>
       <fieldset id="insertDetails"> 
          <form 
            form id='contributeForm' 
            className='form' 
            onSubmit={this.handleSubmit}>
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
            </form>
              <CreditCardInfo />
          </fieldset>
      </div>
    );
  }
}

export default InsertDetails
