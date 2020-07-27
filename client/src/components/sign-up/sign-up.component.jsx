import React, { useState } from "react";
import "./sign-up.style.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { withRouter } from "react-router-dom";
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignUp = ({ signUpStart, history }) => {
  const [userDetails, setUserDetails] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userDetails;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords does not match");
      return;
    }

    try {
      signUpStart({ email, password, displayName });
      // const { user } = await auth.createUserWithEmailAndPassword(
      //   email,
      //   password,
      //   displayName
      // );
      // await createUserProfileDocument(user, { displayName });

      setUserDetails({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      history.push("/");
    } catch (error) {
      alert("Error!!" + error);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">New User? Register here</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          value={displayName}
          onChange={handleChange}
          label="User name"
          required
        />
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          label="eMail"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm password"
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (emailAndPasswordWithDisplayName) =>
    dispatch(signUpStart(emailAndPasswordWithDisplayName)),
});
export default connect(null, mapDispatchToProps)(withRouter(SignUp));
