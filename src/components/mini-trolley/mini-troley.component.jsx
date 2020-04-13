import React from "react";
import "./mini-trolley.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

const MiniTrolley = () => (
  <div className="mini-trolley">
    <div className="trolley-items"></div>
    <CustomButton>Go to Trolley </CustomButton>
  </div>
);

export default MiniTrolley;
