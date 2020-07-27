import React from "react";
import "./mini-trolley.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import MiniTrolleyProductPod from "../mini-trolley-product-pod/mini-trolley-product-pod";
import { connect } from "react-redux";
import { selectTrolleyItems } from "../../redux/trolley/trolley.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { showMiniTrolley } from "../../redux/trolley/trolley.actions";

const MiniTrolley = ({ trolleyItems, history, dispatch }) => (
  <div className="mini-trolley">
    <div className="trolley-items">
      {trolleyItems.length ? (
        trolleyItems.map((item) => (
          <MiniTrolleyProductPod key={item.id} item={item} />
        ))
      ) : (
        <span> Trolley is empty </span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(showMiniTrolley());
      }}
    >
      Go to Trolley
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  trolleyItems: selectTrolleyItems,
});

export default withRouter(connect(mapStateToProps, null)(MiniTrolley));
