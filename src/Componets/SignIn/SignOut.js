import React from "react";
import fire from "./../../config/Fire";
import { Redirect } from "react-router";
import { connect } from "react-redux";

const SignOut = (props) => {
  function logout() {
    fire.auth().signOut();
    props.onChangeUser([]);
  }

  return (
    <div>
      {logout()}
      <Redirect to="/" />
    </div>
  );
};

export default connect(
  (state) => ({
    user: state.loggins,
  }),
  (dispatch) => ({
    onChangeUser: (user) => {
      console.log(user);
      dispatch({ type: "CHANGE_LOGIN", payload: user });
    },
  })
)(SignOut);
