import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetched } from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "./collection-overview.component";
import { compose } from "redux";

const mapStateToProps = () =>
  createStructuredSelector({
    isLoading: selectIsCollectionFetched,
  });

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

// const CollectionOverviewContainer = connect(mapStateToProps)(
//   WithSpinner(CollectionOverview)
// );

export default CollectionOverviewContainer;
