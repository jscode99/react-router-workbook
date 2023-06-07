import { Link } from "react-router-dom";

export default function Users() {
  return (
    <>
      <div>Users List</div>
      <h1>
        <Link to="1">User 1</Link>
      </h1>
      <h1>User 2</h1>
      <h1>User 3</h1>
    </>
  );
}
