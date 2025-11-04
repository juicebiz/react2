import { useContext } from "react";
import SettingsContext from "../contexts/SettingsContext";

export default function useSettings(){
  const settings = useContext(SettingsContext);

  if(!settings){
    throw new Error('Some moron run application withot settings provider');
  }

  return settings;
}