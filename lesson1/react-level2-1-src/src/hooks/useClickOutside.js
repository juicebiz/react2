import { useEffect, useRef } from "react";

export default function useClickOutside(callback){
  const ref = useRef(null);

  useEffect(() => {
    function onClick(e){
      if(ref.current && !ref.current.contains(e.target)){
        console.log('here')
        callback(e);
      }
    }

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    }
  }, [callback]);

  return ref;
}