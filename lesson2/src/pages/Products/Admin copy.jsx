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
      cellRender={({ key, value }) => {
        if(key === 'price'){
          return value + ' rub.'
        }

        if(key === 'rest'){
          return <>
            <span>{ value }</span>
            <button class="btn btn-secondary">?</button>
          </>
        }

        return value;
      }}
    />} 
  />
}