import { Link } from "react-router";
import ProductControls from "./Controls";

export default function ProductCard({ id, title, price }){
  return <div className="card">
    <div className="card-body">
      <h5 className="card-title">{ title }</h5>
      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, ducimus ullam laborum qui sequi beatae architecto quis at numquam iste voluptate rerum accusantium placeat inventore aliquam illum debitis quia excepturi.</p>
      <div>{ price }</div>
      <hr/>
      <Link to={`/products/${id}`}>Read more</Link>
      <hr/>
      <ProductControls {...{ id, title, price }} />
    </div>
  </div>; 
}