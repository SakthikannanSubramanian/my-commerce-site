import React from "react";
import "./trolley-overview.styles.scss";
import { ReactComponent as TrolleyOverViewIcon } from "../../assets/trolleyBag.svg";
import { connect } from "react-redux";
import { showMiniTrolley } from "../../redux/trolley/trolley.actions";
import { selectTrolleyCount } from "../../redux/trolley/trolley.selectors";
import { createStructuredSelector } from "reselect";

const TrolleyOverview = ({ toggleMiniTrolleyDisplay, quantity }) => (
  <div className="trolleyOverview" onClick={toggleMiniTrolleyDisplay}>
    <TrolleyOverViewIcon className="trolley-overview-icon" />
    <span className="item-count">{quantity}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleMiniTrolleyDisplay: () => dispatch(showMiniTrolley()),
});

const mapStateToProps = createStructuredSelector({
  quantity: selectTrolleyCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(TrolleyOverview);
