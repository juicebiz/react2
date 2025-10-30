import ProductControls from "@/components/Products/Controls";
import AsyncHelper from "@/components/Shared/AsyncHelper";
import useFetch from "@/hooks/useFetch";
import { Link, useParams } from "react-router"


export default function ProductsItemPage() {
  const { id } = useParams();
  const request = useFetch(`https://faceprog.ru/reactcourseapi/products/index.php?delay&id=${id}`);

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