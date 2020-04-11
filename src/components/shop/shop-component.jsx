import React, { Component } from "react";
import { STORE } from "../../api/store";
import CollectionPreview from "../collection-preview/collection-preview.component";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = { collections: STORE };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview
            key={id}
            {...otherCollectionProps}
          ></CollectionPreview>
        ))}
      </div>
    );
  }
}

export default ShopPage;
