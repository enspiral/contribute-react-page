import React, { Component } from 'react'

import FirstName from "../atom/FirstName.jsx";
import LastName from "../atom/LastName.jsx";
import EmailAddress from "../atom/EmailAddress.jsx";
import CreditCardInfo from "../molecules/CreditCardInfo.jsx";

class InsertDetails extends Component {
  constructor() {
    super()
    this.state = {
      firstname: '',
      lastname: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div>
       <fieldset id="insertDetails"> 
          <form form id='contributeForm' className='form' onSubmit={this.handleSubmit}>
              <FirstName firstname={this.state.firstname} onChange={this.handleChange}/>
              <LastName lastname={this.state.lastname} onChange={this.handleChange}/>
              <EmailAddress email={this.state.email} onChange={this.handleChange}/>
              <CreditCardInfo />
            </form>
          </fieldset>
      </div>
    );
  }
}

export default InsertDetails
