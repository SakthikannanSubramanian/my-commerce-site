import React from "react";
import { Route } from "react-router-dom";
import CollectionOverview from "../collection-overview/collection-overview.component";
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { setShopData } from "../../redux/shop/shop.actions";

import WithSpinner from "../with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unSubscribeFromSnapShot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unSubscribeFromSnapShot = collectionRef.onSnapshot(
      async (snapShot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapShot);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
      }
    );
  }

  // componentWillUnmount() {
  //   this.unSubscribeFromSnapShot();
  // }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) => dispatch(setShopData(collectionsMap)),
});
export default connect(null, mapDispatchToProps)(ShopPage);
