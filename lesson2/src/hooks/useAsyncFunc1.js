import { useRef, useState } from "react";

export default function useAsyncFunc(fn){
  const isRunOnceFired = useRef(false);

  const [ result, setResult ] = useState({ 
    idle: true,
    pending: false,
    data: null,
    error: null
  });

  function run(...args){
    isRunOnceFired.current = true;
    setResult({ idle: false, pending: true, data: null, error: null });

    fn(...args)
      .then(data => {
        setResult({ 
          idle: false,
          pending: false,
          error: null,
          data
        })
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

  function runOnce(...args){
    if(!isRunOnceFired.current){
      run(...args);
    }
  }

  return { result, run, runOnce };
}