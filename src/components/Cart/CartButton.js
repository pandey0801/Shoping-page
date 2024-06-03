import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { uiAction } from '../store/ui-slice';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const toggleCardHandler = (event)=>{
    dispatch(uiAction.toggle());
  }

  const totalQuantity = useSelector((state)=>state.cart.totalQuantity);
  console.log(totalQuantity);
  return (
    <button className={classes.button} onClick={toggleCardHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
