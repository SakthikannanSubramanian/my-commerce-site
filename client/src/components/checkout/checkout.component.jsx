import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectTrolleyItems,
  selectTrolleyTotal,
} from "../../redux/trolley/trolley.selectors";
import TrolleyPod from "../trolleyPod/trolleyPod.component";
import "./checkout.styles.scss";
import StripeCheckoutButton from "../stripe-button/stripe-button.component";

const CheckoutPage = ({ cartItems, trolleyTotal, match }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>

      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((item) => (
      <TrolleyPod key={item.id} trolleyItem={item} />
    ))}
    <div className="total">Total: £{trolleyTotal}</div>
    {trolleyTotal ? <StripeCheckoutButton price={trolleyTotal} /> : null}
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectTrolleyItems,
  trolleyTotal: selectTrolleyTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
