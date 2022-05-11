import classes from "./CartButton.module.css";
import { uiSliceAction } from "../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const cartHandler = () => {
    dispatch(uiSliceAction.toggle());
  };
  return (
    <button className={classes.button} onClick={cartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
