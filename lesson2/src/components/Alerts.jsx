import useStore from "@/hooks/useStore";
import { observer } from "mobx-react-lite";

function AlertsBase(){
  const { alerts } = useStore();

  return <div className="position-absolute" style={{ right: 0, top: 0, zIndex: 10000 }}>
    { alerts.messages.map(msg => <div 
      className={`alert alert-${msg.type}`}
      key={msg.id}
    >{msg.text}</div>) }
  </div>
}

const Alerts = observer(AlertsBase);

export default Alerts;