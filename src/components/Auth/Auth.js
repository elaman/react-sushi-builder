import React from "react";
import axios from "axios";
import { start, auth } from "../../store/actions/auth";
import withAxios from "../../hoc/withAxios/withAxios";
import classes from "./Auth.module.css";
import Button from "../UI/Button/Button";
import Spinner from "../UI/Spinner/Spinner";
import { useDispatch, useSelector } from "react-redux";

export default withAxios(() => {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.auth);

  const formSubmitted = (event) => {
    start(dispatch);

    const data = new FormData(event.target);
    auth(dispatch, data.get('email'), data.get('password'));

    event.preventDefault();
  }

  let formOutput = <Spinner />;
  if (!loading) {
    formOutput = (
      <form onSubmit={formSubmitted}>
        <h1>Welcome</h1>
        <input type="email" placeholder="E-mail" name="email" required />
        <input type="password" placeholder="Password" name="password" required minLength="6" />
        <Button green>Submit</Button>
      </form>
    );
  }

  return (
    <div className={classes.Auth}>
      {formOutput}
    </div>
  );
}, axios);