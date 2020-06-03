import React from "react";
import axios from "axios";
import withAxios from "../../hoc/withAxios/withAxios";
import classes from "./Auth.module.css";
import Button from "../UI/Button/Button";

export default withAxios(() => {
  return (
    <div className={classes.Auth}>
      <form>
        <h1>Sign up</h1>
        <input type="text" placeholder="E-mail" name="email" required />
        <input type="password" placeholder="Password" name="password" required minLength="6" />
        <Button green>Submit</Button>
      </form>
    </div>
  );
}, axios);