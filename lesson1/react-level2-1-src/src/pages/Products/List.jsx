import useFetch from "@/hooks/useFetch";
import ProductCard from "@/components/Products/Card";
import AsyncHelper from "@/components/Shared/AsyncHelper";

export default function ProductsListPage() {
  const products = useFetch('https://faceprog.ru/reactcourseapi/products/index.php?delay');

  return <AsyncHelper fetchResult={products} render={data => <div className="row">
    { data.map(item => <div className="col col-12 col-md-4 mb-3" key={item.id}>
      <ProductCard 
        { ...item }
      /> 
    </div> )}
  </div>} />
}