import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuthContext } from "./auth";

export default function Login() {
  const [user, setUser] = useState("");
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  // Setting redirect paths
  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    login(user);
    navigate(redirectPath, { replace: true });
  };

  return (
    <div>
      <label>
        Username :
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
