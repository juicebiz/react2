import ProductCard from "@/components/Products/Card";
import AsyncHelper from "@/components/Shared/AsyncHelper";
import useAsyncFn from "@/hooks/useAsyncFn.js";
import { api } from "@/api/client";

export default function ProductsListPage() {
  const products = useAsyncFn(api.products.all);

  return <AsyncHelper fetchResult={products} render={data => <div className="row">
    { data.map(item => <div className="col col-12 col-md-4 mb-3" key={item.id}>
      <ProductCard 
        { ...item }
      /> 
    </div> )}
  </div>} />
}