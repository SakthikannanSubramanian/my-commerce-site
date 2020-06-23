import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CollectionOverview from "../collection-overview/collection-overview.component";
import CategoryPage from "../category-page/category-page.component";
import CollectionOverviewContainer from "../collection-overview/collection-overview.container";
// import {
//   firestore,
//   convertCollectionSnapshotToMap,
// } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { fetchCollectionsSuccessAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetched } from "../../redux/shop/shop.selector";

import WithSpinner from "../with-spinner/with-spinner.component";

const CategoryOverviewWithSpinner = WithSpinner(CategoryPage);

class ShopPage extends React.Component {
  // state = {
  //   loading: true,
  // };

  // unSubscribeFromSnapShot = null;

  componentDidMount() {
    const { fetchCollectionsSuccessAsync } = this.props;
    fetchCollectionsSuccessAsync();
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection("collections");
    // this.unSubscribeFromSnapShot = collectionRef.onSnapshot(
    //   //instead of snapshot you can do .get() or native fetch() method with API URL. snapshot is exactly like the Observer Observable pattern
    //   async (snapShot) => {
    //     const collectionsMap = convertCollectionSnapshotToMap(snapShot);
    //     updateCollections(collectionsMap);
    //     this.setState({ loading: false });
    //   }
    // );
  }

  componentWillUnmount() {
    //this.unSubscribeFromSnapShot();
  }

  render() {
    const { match, isFetching } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:categoryId`}
          render={(props) => (
            <CategoryOverviewWithSpinner isLoading={isFetching} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = () =>
  createStructuredSelector({
    isFetching: selectIsCollectionFetched,
  });

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsSuccessAsync: () => dispatch(fetchCollectionsSuccessAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
