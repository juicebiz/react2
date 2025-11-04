import useStore from "@/hooks/useStore";
import { observer } from "mobx-react-lite";
import { Navigate } from "react-router";

function AuthGuardBase({ children }) {
  const { auth } = useStore();

  return <>
    { auth.isAuth && children }
    { !auth.isAuth && <Navigate to="/login" /> }
  </>
}

const AuthGuard = observer(AuthGuardBase);
export default AuthGuard;