import { useEffect, useState } from "react";
import UserCard from "./userCard/userCard";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";

export default function LikedUsers() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const liked = JSON.parse(localStorage.getItem("likedUsers")) || [];
    setUsers(liked);
  }, []);

  const handleUnLike = (emailToRemove) => {
    const updated = users.filter((user) => user.email !== emailToRemove);
    localStorage.setItem("likedUsers", JSON.stringify(updated));
    setUsers(updated);
  };

  return (
    <>
      <div className="container">
        {users.map((user, index) => (
          <UserCard
            key={index}
            picture={user.picture.large}
            name={`${user.name.title} ${user.name.first} ${user.name.last}`}
            email={user.email}
            viewProfileLink={
              <Link
                to="/team/:id"
                state={{ user }}
                className="view-profile-btn"
              >
                <FaRegUser style={{ marginRight: "6px" }} />
                View Profile
              </Link>
            }
            onUnLike={() => handleUnLike(user.email)}
            showUnlikeButton={true}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "100px",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <button className="backBtn" onClick={() => navigate("/team")}>
          <IoArrowBackSharp /> Back to Team
        </button>
      </div>
    </>
  );
}
