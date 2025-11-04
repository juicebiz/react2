import ProductControls from "@/components/Products/Controls";
import AsyncHelper from "@/components/Shared/AsyncHelper";
import useApi from "@/hooks/useApi";
import useAsyncFunc from "@/hooks/useAsyncFunc";
/* import { useEffect } from "react"; */
import { Link, useParams } from "react-router"

export default function ProductsItemPage() {
  const { id } = useParams();
  const api = useApi();

  const gallery = useAsyncFunc(api.products.gallery);
  const product = useAsyncFunc(api.products.get, { 
    autorun: [ id ],
    success: item => gallery.run(item.id)
  });

/*   useEffect(() => {
    if(product.result.data){
      gallery.run(1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ product.result ]) */

  return <AsyncHelper asyncData={product.result} global404={true} render={product => <div>
    <Link to="/products">К списку продуктов</Link>
    <h1>{product.title}</h1>
    <div>Price: {product.price}</div>  
    <hr/>
    <ProductControls
      id = {product.id}
      title = {product.title}
      price = {product.price}
    />
    <hr />
    <AsyncHelper 
      asyncData={gallery.result} 
      render={images => <div className="mt-3">
        { images.map((img,i) => <img src={img} key={i} alt="" />) } 
      </div>} 
      /* idleRender={() => <button onClick={() => gallery.run(id)} className="btn btn-primary">
        Load gallery
      </button>} */
    />
  </div>}
  />
}