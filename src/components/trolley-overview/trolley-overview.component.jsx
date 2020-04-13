import React from "react";
import "./trolley-overview.styles.scss";
import { ReactComponent as TrolleyOverViewIcon } from "../../assets/trolleyBag.svg";
import { connect } from "react-redux";
import { showMiniTrolley } from "../../redux/trolley/trolley.actions";

const TrolleyOverview = ({ toggleMiniTrolleyDisplay }) => (
  <div className="trolleyOverview" onClick={toggleMiniTrolleyDisplay}>
    <TrolleyOverViewIcon className="trolley-overview-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleMiniTrolleyDisplay: () => dispatch(showMiniTrolley()),
});

export default connect(null, mapDispatchToProps)(TrolleyOverview);
