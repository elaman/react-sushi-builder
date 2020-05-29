import React from "react";
import Sushi from "./Sushi/Sushi";
import classes from "./SushiKit.module.css";

export default ({ price, ingredients }) => {
  let ingredientsOutput = [];

  Object.keys(ingredients).forEach((ingredient) => {
    for (let i = 0; i < ingredients[ingredient].quantity; i++) {
      ingredientsOutput.push(<Sushi key={ingredient + i} type={ingredient} />);
    }
  });

  return (
    <div className={classes.SushiKit}>
      <div className={classes.bento}>{ingredientsOutput}</div>
      <div className={classes.price}>{price.toFixed(2)} som</div>
    </div>
  );
};
