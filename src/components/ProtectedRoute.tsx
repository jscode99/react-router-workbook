import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "./auth";

export default function ProtectedRoute({ children }: any) {
  const { user } = useAuthContext();
  const location = useLocation();

  if (!user) {
    return <Navigate to={`/login`} state={{ path: location.pathname }} />;
  }
  return children;
}
