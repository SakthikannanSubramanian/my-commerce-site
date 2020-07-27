import React from "react";
import "./mini-trolley-product-pod.styles.scss";

const MiniTrolleyProductPod = ({
  item: { imageUrl, price, name, quantity },
}) => (
  <div className="mini-trolley-product-pod">
    <img src={imageUrl} alt={name} />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        £{price} X {quantity}
      </span>
    </div>
  </div>
);

export default MiniTrolleyProductPod;
