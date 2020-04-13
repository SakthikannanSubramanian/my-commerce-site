import React from "react";
import "./trolley-overview.styles.scss";
import { ReactComponent as TrolleyOverViewIcon } from "../../assets/trolleyBag.svg";
import { connect } from "react-redux";
import { showMiniTrolley } from "../../redux/trolley/trolley.actions";

const TrolleyOverview = ({ toggleMiniTrolleyDisplay, trolleyItems }) => (
  <div className="trolleyOverview" onClick={toggleMiniTrolleyDisplay}>
    <TrolleyOverViewIcon className="trolley-overview-icon" />
    <span className="item-count">
      {trolleyItems.reduce((total, item) => total + item.quantity, 0)}
    </span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleMiniTrolleyDisplay: () => dispatch(showMiniTrolley()),
});

const mapStateToProps = ({ trolley: { trolleyItems } }) => ({
  trolleyItems: trolleyItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(TrolleyOverview);
