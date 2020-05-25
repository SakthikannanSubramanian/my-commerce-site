import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./with-spinner.styles";

const WithSpinner = (WarappedComponent) => ({ isLoading, ...otherProps }) =>
  isLoading ? (
    <SpinnerContainer>
      <SpinnerOverlay />
    </SpinnerContainer>
  ) : (
    <WarappedComponent {...otherProps} />
  );

export default WithSpinner;
