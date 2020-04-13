import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { addItemToTrolley } from "../../redux/trolley/trolley.actions";
import { connect } from "react-redux";

const CollectionItem = ({ item, addItemToTrolley }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{`£${price}`}</span>
      </div>
      <CustomButton inverted onClick={() => addItemToTrolley(item)}>
        Add to Trolley
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToTrolley: (item) => dispatch(addItemToTrolley(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
