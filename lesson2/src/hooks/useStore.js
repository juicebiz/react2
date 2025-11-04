import { useContext } from "react";
import StoreContext from "@/contexts/StoreContext";

export default function useStore(){
  const store = useContext(StoreContext);

  if(!store){
    throw new Error('Some moron run application withot store provider');
  }

  return store;
}