import React, { Component }from 'react'
import { CardNumberElement, CardExpiryElement, CardCVCElement } from 'react-stripe-elements'

const cardStyle = {
  base: {
    color: "808080",
    fontSize: "13px",
    fontSmoothing: "antialiased",

    ":focus": {
      color: "black",
    },

    "::placeholder": {
      color: "#80808085",
    },

    ":focus::placeholder": {
      color: "#80808085",
    },
  },
  invalid: {
    color: "black",
    ":focus": {
      color: "red",
    },
    "::placeholder": {
      color: "#808080",
    },
  },
};

const cardClasses = {
  focus: 'focus',
  empty: 'empty',
  invalid: 'invalid',
}

class CreditCardInfo extends Component {
  render() {
    return (
      <fieldset id="creditCard">
          <legend>Pay by Credit card or Debit card</legend>
          <div className='cardDetailFields'>
            <CardNumberElement style={cardStyle} classes={cardClasses}/>
          </div>
          <div className='cardDetailFields'>
            <CardExpiryElement style={cardStyle} classes={cardClasses}/>
          </div>
          <div className='cardDetailFields'>
            <CardCVCElement style={cardStyle} classes={cardClasses}/>
          </div>
      </fieldset>
    );
  }
}

export default CreditCardInfo