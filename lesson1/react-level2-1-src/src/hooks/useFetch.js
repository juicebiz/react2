import { HttpError } from "@/shared/errors";
import { useEffect, useState } from "react";

// useAsyncFn(fn, ...params)
// useAsyncFn(api.product.all)
// useAsyncFn(api.product.one, 100)
export default function useFetch(url, options = {}){
  const [ result, setResult ] = useState({ 
    pending: true,
    data: null,
    error: null
  });

  useEffect(() => {
    fetch(url, options)
      .then(response => {
        if(response.status >= 200 && response.status < 400){
          return response.json();
        }
        
        throw new HttpError('silense is gold :)', response.status);
      })
      .then(data => {
        setResult({ 
          pending: false,
          error: null,
          data
        })
      })
      .catch(error => {
        setResult({ 
          pending: false,
          data: null,
          error
        })
      })
  // this fetch is one time used
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return result;
}