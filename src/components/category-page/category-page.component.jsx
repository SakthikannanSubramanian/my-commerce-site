import React from "react";
import "./category-page.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selector";
import { connect } from "react-redux";

const CategoryPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="category-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem
            className="collection-item"
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.categoryId)(state),
});
export default connect(mapStateToProps)(CategoryPage);
