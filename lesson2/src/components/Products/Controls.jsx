import useStore from "@/hooks/useStore";
import { observer } from "mobx-react-lite";

function ProductControlsNative({ id, title, price }){
  const { cart } = useStore();

  function add(){
    cart.add(id, { title, price, cnt: 1 });
  }

  function decrement(){
    cnt > 1 ? cart.change(id, cnt - 1) : cart.remove(id);
  }

  const cnt = cart.getCnt(id);
  const inProccess = cart.inProccess(id);

  return <div>
    { cnt == 0 && <button onClick={add} disabled={inProccess} className="btn btn-success">Add to cart</button> }
    { cnt > 0 && <>
      <button onClick={decrement} disabled={inProccess} className="btn btn-danger me-1">-</button>
      <strong>{ cnt }</strong>
      <button onClick={() => cart.change(id, cnt + 1)} disabled={inProccess} className="btn btn-primary ms-1">+</button>
    </> }
  </div>; 
}

const ProductControls = observer(ProductControlsNative);

export default ProductControls;