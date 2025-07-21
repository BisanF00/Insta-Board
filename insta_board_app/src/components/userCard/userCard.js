import { useState } from "react";
import "./userCard.css";
import { ImHeart } from "react-icons/im";
import { MdEmail } from "react-icons/md";

export default function UserCard({ picture, name, email }) {
  const [likes, setLikes] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [clicked, setClicked] = useState(false);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div className="card">
      <img src={picture} alt={name} className="userImg"></img>
      <h3>{name}</h3>
      <p style={{ display: isHidden ? "block" : "none" }}>{email}</p>
      <button className="hideEmail" onClick={() => setIsHidden(!isHidden)}>
        <MdEmail />
      </button>
      <button
        className={`heartLike ${clicked ? 'clicked' : ''}`}
        onClick={() => {
          handleLike();
          setClicked(true);
          setTimeout(() => setClicked(false), 200);
        }}
        style={{ color: likes ? "red" : "white" }}
      >
        <ImHeart /> {likes}
      </button>
    </div>
  );
}
