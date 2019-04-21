import React, { Component }from 'react'
import { CardElement } from 'react-stripe-elements'

const cardStyle = {
  base: {
    borderBottom: '1px, solid, black',
    color: 'black',
    '::placeholder': {
      color: 'white'
    },
    iconColor: 'black',
  }
}

class CreditCardInfo extends Component {
  render() {
    return (
      <fieldset id="creditCard">
          <legend>Pay by Credit card or Debit card</legend>
          <CardElement
            style={cardStyle}
            elementRef={c => (this._element = c)}
          />
      </fieldset>
    );
  }
}

export default CreditCardInfo