import { useLocation, useNavigate } from "react-router-dom";
import "./TeamDetails.css";
import { IoArrowBackSharp } from "react-icons/io5";

export default function TeamDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const { user } = location.state || {};

  return (
    <div className="userDetails">
      <img src={user.picture.large} alt="profile" className="userImage" />
      <h2 className="userName">{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
      <div className="information">
        <p>Gender: {user.gender}</p>
        <p>Age: {user.dob.age}</p>
        <p>Email: {user.email}</p>
        <p>Location: {`${user.location.city} / ${user.location.country}`}</p>
        <p>Phone: {user.phone}</p>
      </div>
      <button className="backBtn" onClick={() => navigate("/team")}><IoArrowBackSharp /> Back to Team</button>
    </div>
  );
}
