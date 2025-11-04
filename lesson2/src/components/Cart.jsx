import useStore from "@/hooks/useStore";
import { observer } from "mobx-react-lite";

function CartBase(){
  const { cart } = useStore();

  return <div>
    <div>
      <strong>In cart: { cart.count }</strong>
    </div>
    <div>
      <strong>Total: { cart.total }</strong>
    </div>
  </div>
}

const Cart = observer(CartBase);

export default Cart;