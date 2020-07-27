import React from "react";
import "./authentication.styles.scss";

import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";

const Authentication = () => (
  <div className="authentication">
    <SignIn />
    <SignUp />
  </div>
);

export default Authentication;
