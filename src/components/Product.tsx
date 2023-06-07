import { Link, Outlet } from "react-router-dom";

export default function Product() {
  return (
    <>
      <div>
        <input type="search" placeholder="Search" />
      </div>
      <nav style={{ display: "flex", gap: "10px" }}>
        {/*
         Relative links - without '/' - Will inherit the closests route they are rendered - In this scenerio that is '/product'
          */}
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
      </nav>
      <Outlet />
    </>
  );
}
