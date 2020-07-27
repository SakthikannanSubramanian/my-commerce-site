import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_nHlC0zxOhlSWpdrMgReGZAtJ000XABSK9u"; //key from stripe dashboard of your account sakthikannan.mba@gmail.com
  const OnToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(alert("Payment to Sakthi Sweets was successful"))
      .catch((err) => {
        console.log(err);
        alert("Payment error, Please try again");
        console.log("Payment Error", JSON.parse(err));
      });
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Sakthi Sweets Ltd"
      currency="GBP"
      billingAddress
      shippingAddress
      description={`Your total is £${price}`}
      panelLabel="Pay now"
      token={OnToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
