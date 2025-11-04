import AsyncHelper from "@/components/Shared/AsyncHelper";
import DataTable from "@/components/UI/DataTable";
import useApi from "@/hooks/useApi";
import useAsyncFunc from "@/hooks/useAsyncFunc";

export default function ProductsListPage() {
  const api = useApi();
  const products = useAsyncFunc(api.products.all, { autorun: [] });

  return <AsyncHelper 
    asyncData={products.result} 
    render={data => <DataTable 
      data={data} 
      cellRender={{
        price: item => `${item.price} rub...`,
        rest: item => <>
          <span>{ item.rest }</span>
          <button className="btn btn-secondary">?</button>
        </>
      }}
    />} 
  />
}