import { useContext } from "react";
import ApiContext from "@/contexts/ApiContext";

export default function useApi(){
  const api = useContext(ApiContext);

  if(!api){
    throw new Error('Some moron run application without api provider');
  }

  return api;
}