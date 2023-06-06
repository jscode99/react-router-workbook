import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      Home page
      <br />
      {/* History is replaced with 'replace: true' */}
      <button onClick={() => navigate("order-summary", { replace: true })}>
        Place Order
      </button>
    </div>
  );
}
