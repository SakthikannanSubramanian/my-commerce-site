import React from "react";
import "./mini-trolley.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import MiniTrolleyProductPod from "../mini-trolley-product-pod/mini-trolley-product-pod";
import { connect } from "react-redux";

const MiniTrolley = ({ trolleyItems }) => (
  <div className="mini-trolley">
    <div className="trolley-items">
      {trolleyItems.map((item) => (
        <MiniTrolleyProductPod key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>Go to Trolley </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  trolleyItems: state.trolley.trolleyItems,
});

export default connect(mapStateToProps, null)(MiniTrolley);
