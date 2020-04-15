import React from "react";
import classes from "./OrderSummary.module.css";

const LABELS = {
  avocadoMaki: "Avocado Maki",
  avocadoTunaRoll: "Avocado Tuna Roll",
  californiaMaki: "California Maki",
  californiaTunaRoll: "California Tuna Roll",
  ikuraMaki: "Ikura Maki",
  salmonMaki: "Salmon Maki",
};

export default ({ ingredients }) => {
  const ingredientsOutput = Object.keys(ingredients)
    .filter((ingredient) => ingredients[ingredient] > 0)
    .map((ingredient) => (
      <li>
        {LABELS[ingredient]}: {ingredients[ingredient]}
      </li>
    ));

  return (
    <div className={classes.OrderSummary}>
      <h2>Your order</h2>
      <p>Congratulations! You've built a best sushi-kit of all times!</p>
      <ul>{ingredientsOutput}</ul>
      <p>Would you like to checkout?</p>
    </div>
  );
};
