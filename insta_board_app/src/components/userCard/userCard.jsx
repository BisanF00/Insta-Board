import { useState } from "react";
import "./userCard.css";
import { ImHeart } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { MdOutlineHeartBroken } from "react-icons/md";

export default function UserCard({
  picture,
  name,
  email,
  user,
  viewProfileLink,
  onUnLike,
  showUnlikeButton,
}) {
  const [likes, setLikes] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [clicked, setClicked] = useState(false);

  const HandleLike = () => {
    setLikes(likes + 1);

    const liked = JSON.parse(localStorage.getItem("likedUsers")) || [];
    const alreadyLiked = liked.find((u) => u.email === user.email);

    if (!alreadyLiked) {
      liked.push(user);
      localStorage.setItem("likedUsers", JSON.stringify(liked));
    }
  };

  return (
    <div className="card">
      <img src={picture} alt={name} className="userImg"></img>
      <h3>{name}</h3>
      <p style={{ display: isHidden ? "block" : "none" }}>{email}</p>
      <button className="hideEmail" onClick={() => setIsHidden(!isHidden)}>
        <MdEmail />
      </button>
      <button
        className={`heartLike ${clicked ? "clicked" : ""}`}
        onClick={() => {
          HandleLike();
          setClicked(true);
          setTimeout(() => setClicked(false), 200);
        }}
        style={{ color: likes ? "red" : "white" }}
      >
        <ImHeart /> {likes}
      </button>
      <div>{viewProfileLink}</div>
      {showUnlikeButton && (
        <button onClick={onUnLike} className="view-profile-btn">
           <MdOutlineHeartBroken /> Unlike
        </button>
      )}
    </div>
  );
}
