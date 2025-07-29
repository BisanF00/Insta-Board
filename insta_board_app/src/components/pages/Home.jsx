import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import { TiGroup } from "react-icons/ti";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Welcome to Insta Board App</h1>
      <p>
        This app showcases a list of users fetched from an external API <br/>
        You can like users, see their full profiles, and navigate between pages
        easily 
        by using the navigation menu above to explore the app <br/>
        Or Go to the Team page to get started.
      </p>
      <button onClick={() => navigate("/team")}>
        <TiGroup style={{ marginRight: "6px" }} /> Our Team
      </button>
    </div>
  );
}
