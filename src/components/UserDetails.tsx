import { useParams } from "react-router-dom";

export default function UserDetails() {
  const { userId } = useParams();
  return <div>UserDetails Page of user {userId}</div>;
}
