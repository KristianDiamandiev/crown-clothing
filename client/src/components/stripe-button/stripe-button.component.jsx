import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { connect } from "react-redux";

import { clearCart } from "../../redux/cart/cart.actions";
import AlertMessage from "../alert-message/alert-message.component";

const StripeCheckoutButton = ({ price, clearCart }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Gt93LKgdL7yCyvUtMQkHrtWMhLSVWuVolmsBazppDabvZk9rWS0qPaORNKiHs9c0utyRJohdIKmO28V0igC0TbL007bLIV7zw";

  const [showAlertMessage, setShowAlertMessage] = useState(false);

  const showDissapearingMessage = () => {
    setShowAlertMessage(true);
    setTimeout(function () {
      setShowAlertMessage(false);
    }, 3000);
  };

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        clearCart();
        showDissapearingMessage();
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure the provided credit card"
        );
      });
  };

  return (
    <React.Fragment>
      <StripeCheckout
        label="Pay Now"
        name="CROWN Clothing Ltd."
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
      {showAlertMessage === true ? (
        <AlertMessage message={"Payment successful."} />
      ) : null}
    </React.Fragment>
  );
};

export const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
