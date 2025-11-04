import { useEffect, useState } from "react";

export default function useAsyncFunc(fn, config = {}){
  const [ result, setResult ] = useState({ 
    idle: true,
    pending: false,
    data: null,
    error: null
  });

  function run(...args){
    setResult({ idle: false, pending: true, data: null, error: null });

    fn(...args)
      .then(data => {
        setResult({ 
          idle: false,
          pending: false,
          error: null,
          data
        })

        config.success && config.success(data);
      })
      .catch(error => {
        setResult({ 
          idle: false,
          pending: false,
          data: null,
          error
        })
      })
  }

  useEffect(() => {
    if(config.autorun && Array.isArray(config.autorun)){
      run(...config.autorun);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { result, run };
}