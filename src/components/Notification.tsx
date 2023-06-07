import { useSearchParams } from "react-router-dom";

export default function Notification() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUser = searchParams.get("filter") === "active";
  return (
    <>
      <div>Notification Panel</div>
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Active users
      </button>
      <button onClick={() => setSearchParams({})}>All users</button>
      <br />
      {showActiveUser ? "Showing active users" : "Showing all users"}
    </>
  );
}
