import React, { Component }from 'react'
import { CardNumberElement, CardExpiryElement,CardCVCElement } from 'react-stripe-elements'

const cardStyle = {
  base: {
    color: "white",
    fontSize: "13px",
    fontSmoothing: 'antialiased',

    ":focus": {
      color: "white",
    },

    "::placeholder": {
      color: "##6d90b300",
    },

    ":focus::placeholder": {
      color: "#CFD7DF",
    },
  },
  invalid: {
    color: "#fff",
    ":focus": {
      color: "#FA755A",
    },
    "::placeholder": {
      color: "#FFCCA5",
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