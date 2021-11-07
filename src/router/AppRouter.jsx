import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, Switch, Route } from "react-router";

//Components
import Home from "../components/home/Home";
import SignUp from "../components/forms/SignUp";
import LogIn from "../components/forms/LogIn";

//Firebase
import { firebase } from "../redux/firebase.config";

//Actions
import { fillUserInfo } from "../redux/actions/user.Action";
import Favorite from "../components/favorite/Favorite";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [isOnSession, setIsOnSession] = useState(false);

  firebase.auth().onAuthStateChanged((user) => {
    if (user?.uid) {
      dispatch(
        fillUserInfo({
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
        })
      );
      setIsOnSession(true);
    } else {
      setIsOnSession(false);
    }
  });

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (isOnSession ? <Home /> : <Redirect to="/login" />)}
      />
      <Route
        exact
        path="/cart"
        render={() => (isOnSession ? <Favorite /> : <Redirect to="/cart" />)}
      />
      <Route
        exact
        path="/login"
        render={() => (!isOnSession ? <LogIn /> : <Redirect to="/" />)}
      />
      <Route
        exact
        path="/signup"
        render={() => (!isOnSession ? <SignUp /> : <Redirect to="/" />)}
      />
    </Switch>
  );
};

export default AppRouter;
