import React from "react";
import classes from "./CheckoutForm.module.css";

export default () => {
  return (
    <form className={classes.CheckoutForm}>
      <input type="text" placeholder="Name" required />
      <input type="phone" placeholder="Phone" required />
      <input type="text" placeholder="Address" required />
      Delivery
      <label>
        <input type="radio" name="delivery" value="fast" required /> Fast
      </label>
      <label>
        <input type="radio" name="delivery" value="regular" required /> Regular
      </label>
      <button>Send</button>
    </form>
  );
};
