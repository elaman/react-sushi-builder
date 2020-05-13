import React, { useState } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "./CheckoutForm.module.css";

export default ({ checkoutFinish }) => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    address: "",
    delivery: "",
  });

  function nameChange({ target }) {
    setData({ ...data, name: target.value });
  }

  function phoneChange({ target }) {
    setData({ ...data, phone: target.value });
  }

  function addressChange({ target }) {
    setData({ ...data, address: target.value });
  }

  function deliveryChange({ target }) {
    setData({ ...data, delivery: target.value });
  }

  return (
    <div className={classes.CheckoutForm}>
      <input
        type="text"
        placeholder="Name"
        onChange={nameChange}
        value={data.name}
        required
      />
      <input
        type="phone"
        placeholder="Phone"
        onChange={phoneChange}
        value={data.phone}
        required
      />
      <input
        type="text"
        placeholder="Address"
        onChange={addressChange}
        value={data.address}
        required
      />
      <select onChange={deliveryChange} required>
        <option value="">- Delivery -</option>
        <option>Fastest</option>
        <option>Fast</option>
        <option>Regular</option>
      </select>
      <Button click={() => checkoutFinish(data)} green>
        Finish
      </Button>
    </div>
  );
};
