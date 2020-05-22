import React from "react";
import classes from "./SushiControls.module.css";
import SushiControl from "./SushiControl/SushiControl";
import Button from "../../UI/Button/Button";

const CONTROLS = [
  { label: "Avocado Maki", type: "avocadoMaki" },
  { label: "Avocado Tuna Roll", type: "avocadoTunaRoll" },
  { label: "California Maki", type: "californiaMaki" },
  { label: "California Tuna Roll", type: "californiaTunaRoll" },
  { label: "Ikura Maki", type: "ikuraMaki" },
  { label: "Salmon Maki", type: "salmonMaki" },
];

export default ({ canOrder, ingredients, startOrder }) => {
  const controlsOutput = CONTROLS.map((control) => (
    <SushiControl
      key={control.type}
      control={control}
      disabled={ingredients[control.type] === 0}
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
