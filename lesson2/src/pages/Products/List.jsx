import ProductCard from "@/components/Products/Card";
import AsyncHelper from "@/components/Shared/AsyncHelper";
import useApi from "@/hooks/useApi";
import useAsyncFunc from "@/hooks/useAsyncFunc";

export default function ProductsListPage() {
  const api = useApi();
  const products = useAsyncFunc(api.products.all, { autorun: [] });

  return <AsyncHelper 
    asyncData={products.result} 
    loaderRender={() => 'Loading...'}
    render={data => <div className="row">
      { data.map(item => <div className="col col-12 col-md-4 mb-3" key={item.id}>
        <ProductCard 
          { ...item }
        /> 
      </div> )}
    </div>} 
  />
}