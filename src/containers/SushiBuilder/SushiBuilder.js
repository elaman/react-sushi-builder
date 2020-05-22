import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../../axios";
import SushiKit from "../../components/SushiBuilder/SushiKit/SushiKit";
import SushiControls from "../../components/SushiBuilder/SushiControls/SushiControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/SushiBuilder/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import classes from "./SushiBuilder.module.css";
import { useSelector } from "react-redux";

export default withErrorHandler(() => {
  const { ingredients, price } = useSelector((state) => state);
  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();

  const canOrder = Object.values(ingredients).reduce((canOrder, number) => {
    return !canOrder ? number > 0 : canOrder;
  }, false);

  /*
  useEffect(() => {
    axios
      .get("/ingredients.json")
      .then((response) => setIngredients(response.data))
      .catch((error) => {});
  }, []);
  */

  let output = <Spinner />;
  if (ingredients) {
    output = (
      <>
        <SushiKit price={price} ingredients={ingredients} />
        <SushiControls
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder}
          ingredients={ingredients}
        />
      </>
    );
  }

  let orderSummary = <Spinner />;
  if (isOrdering) {
    orderSummary = (
      <OrderSummary
        ingredients={ingredients}
        finishOrder={() => history.push("/checkout")}
        cancelOrder={() => setIsOrdering(false)}
        price={price}
      />
    );
  }

  return (
    <div className={classes.SushiBuilder}>
      <h1>Sushi builder</h1>
      {output}
      <Modal show={isOrdering} hideCallback={() => setIsOrdering(false)}>
        {orderSummary}
      </Modal>
    </div>
  );
}, axios);
