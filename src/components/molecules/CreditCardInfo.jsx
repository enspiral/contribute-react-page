import React, { Component }from 'react'
import { CardElement } from 'react-stripe-elements'

const cardStyle = {
  base: {
    color: 'black',
    '::placeholder': {
      color: 'grey'
    },
    iconColor: 'black',
  }
}

class CreditCardInfo extends Component {
  render() {
    return(
      <div id="creditCard">
        <p>Pay by credit card or debit card</p>
        <CardElement style={cardStyle} elementRef={c => (this._element = c)} />
      </div>
    );
  }
}

export default CreditCardInfo