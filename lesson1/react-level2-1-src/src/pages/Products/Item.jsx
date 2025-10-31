import ProductControls from "@/components/Products/Controls";
import AsyncHelper from "@/components/Shared/AsyncHelper";
import { Link, useParams } from "react-router"
import useAsyncFn from "@/hooks/useAsyncFn.js";
import { api } from "@/api/client";


export default function ProductsItemPage() {
  const { id } = useParams();
  const request = useAsyncFn(api.products.get, id);

  return <AsyncHelper fetchResult={request} render={product => <div>
    <Link to="/products">К списку продуктов</Link>
    <h1>{product.title}</h1>
    <div>Price: {product.price}</div>  
    <hr/>
    <ProductControls
      id = {product.id}
      title = {product.title}
      price = {product.price}
    />
  </div>}
  />
}