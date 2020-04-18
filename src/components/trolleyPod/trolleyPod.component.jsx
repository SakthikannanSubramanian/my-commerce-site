import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromTrolley,
  addItemToTrolley,
  reduceItemFromTrolley,
} from "../../redux/trolley/trolley.actions";

import "./trolleyPod.styles.scss";

const TrolleyPod = ({
  trolleyItem,
  clearTrolleyItem,
  addItemToTrolley,
  reduceItemFromTrolley,
}) => {
  const { id, imageUrl, name, quantity, price } = trolleyItem;
  return (
    <div key={id} className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span
          className="inc-dec-button"
          role="img"
          aria-label="reduce trolley item"
          onClick={() => reduceItemFromTrolley(trolleyItem)}
        >
          &#10134;
        </span>

        {quantity}

        <span
          className="inc-dec-button"
          role="img"
          aria-label="increase trolley item"
          onClick={() => addItemToTrolley(trolleyItem)}
        >
          &#10133;
        </span>
      </span>
      <span className="price">£{price}</span>
      <span
        className="remove-button"
        role="img"
        aria-label="remove trolley item"
        onClick={() => clearTrolleyItem(trolleyItem)}
      >
        &#10060;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearTrolleyItem: (item) => dispatch(clearItemFromTrolley(item)),
  addItemToTrolley: (item) => dispatch(addItemToTrolley(item)),
  reduceItemFromTrolley: (item) => dispatch(reduceItemFromTrolley(item)),
});

export default connect(null, mapDispatchToProps)(TrolleyPod);
