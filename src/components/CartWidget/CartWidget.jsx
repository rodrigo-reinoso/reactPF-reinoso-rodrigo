import classes from "./CartWidget.module.css"
import { useCart } from '../../context/CartContext'
import { FaCartShopping } from "react-icons/fa6";
import Button from "../Button/Button";

const Cart = () => {
  const { totalQuantity } = useCart()

  return (
    <div className={classes.contenedorCart}>
      <Button to='/cart'>
        <div className={classes.botonCarrito}>
          <FaCartShopping className={classes.carrito} />
          <p>{totalQuantity}</p>
        </div>
      </Button>

    </div>
  )
}

export default Cart