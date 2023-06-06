import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      Home page
      <br />
      <button onClick={() => navigate("order-summary")}>Place Order</button>
    </div>
  );
}
