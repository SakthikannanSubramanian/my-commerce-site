import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

const WithSpinner = (WarappedComponent) => ({ isLoading, ...otherProps }) =>
  isLoading ? (
    <WarappedComponent {...otherProps} />
  ) : (
    <SpinnerContainer>
      <SpinnerOverlay />
    </SpinnerContainer>
  );

export default WithSpinner;
