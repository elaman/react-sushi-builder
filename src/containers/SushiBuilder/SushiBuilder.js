import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../axios";
import { load } from "../../store/actions/builder";
import SushiKit from "../../components/SushiBuilder/SushiKit/SushiKit";
import SushiControls from "../../components/SushiBuilder/SushiControls/SushiControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/SushiBuilder/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import classes from "./SushiBuilder.module.css";

export default withErrorHandler(() => {
  const { ingredients, price } = useSelector(state => state.builder);
  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    load(dispatch);
  }, [dispatch]);

  let output = <Spinner />;
  if (ingredients) {
    const canOrder = Object.values(ingredients).reduce((canOrder, ingredient) => {
      return !canOrder ? ingredient.quantity > 0 : canOrder;
    }, false);

    output = (
      <>
        <SushiKit price={price} ingredients={ingredients} />
        <SushiControls
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder}
          ingredients={ingredients}
        />
        <Modal show={isOrdering} hideCallback={() => setIsOrdering(false)}>
          <OrderSummary
            ingredients={ingredients}
            finishOrder={() => history.push("/checkout")}
            cancelOrder={() => setIsOrdering(false)}
            price={price}
            />
        </Modal>
      </>
    );
  }

  return (
    <div className={classes.SushiBuilder}>
      <h1>Sushi builder</h1>
      {output}
    </div>
  );
}, axios);
