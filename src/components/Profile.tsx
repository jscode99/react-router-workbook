import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./auth";

export default function Profile() {
  const navigate = useNavigate();
  const { user, logOut } = useAuthContext();
  const handleLogOut = () => {
    debugger;
    logOut();
    navigate("/");
  };
  return (
    <div>
      Welcome {user}
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
}
