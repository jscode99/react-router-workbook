import { NavLink } from "react-router-dom";

type navLinkStyles = {
  isActive: boolean;
};

export default function Navbar() {
  const navLinkStyles = ({ isActive }: navLinkStyles) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <div>
      <nav style={{ display: "flex", gap: "10px" }}>
        <NavLink to={`/`} style={navLinkStyles}>
          Home
        </NavLink>
        <NavLink to={`about`} style={navLinkStyles}>
          About
        </NavLink>
        <NavLink to={`products`} style={navLinkStyles}>
          Product
        </NavLink>
        <NavLink to={`notifications`} style={navLinkStyles}>
          Notifications
        </NavLink>
      </nav>
    </div>
  );
}
