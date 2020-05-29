import React from "react";
import classes from "./SushiControls.module.css";
import SushiControl from "./SushiControl/SushiControl";
import Button from "../../UI/Button/Button";

export default ({ canOrder, ingredients, startOrder }) => {
  const controlsOutput = Object.keys(ingredients).map((ingredient) => (
    <SushiControl
      key={ingredient}
      ingredient={ingredient}
      label={ingredients[ingredient].label}
      disabled={ingredients[ingredient].quantity === 0}
    />
  ));

  return (
    <div className={classes.SushiControls}>
      {controlsOutput}
      <Button click={startOrder} enabled={canOrder}>
        Order
      </Button>
    </div>
  );
};
