import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "../userCard/userCard";
import "./Team.css";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

export default function Team() {
  const [users, setUsers] = useState([]);
  const [visibleCount, setVisibleCount] = useState(12);
  const [filterLimit, setFilterLimit] = useState(12);
  const [tempLimit, setTempLimit] = useState(filterLimit);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=100")
      .then((res) => {
        setUsers(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleLoadMore = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/?results=100");
      setUsers((prev) => [...prev, ...res.data.results]);
      setVisibleCount((prev) => prev + filterLimit);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="inputGroup">
          <label htmlFor="limit">Number of users :</label>
          <input
            type="number"
            id="limit"
            value={tempLimit}
            onChange={(e) => setTempLimit(Number(e.target.value))}
            min="1"
          />
          <button
            className="applyBtn"
            onClick={() => {
              if (tempLimit >= 1 && tempLimit <= 100) {
                setFilterLimit(tempLimit);
                setVisibleCount(tempLimit);
              }
            }}
          >
            Apply
          </button>
        </div>

        <div className="container">
          {users.slice(0, visibleCount).map((user, index) => (
            <UserCard
              key={index}
              user={user}
              picture={user.picture.large}
              name={`${user.name.title} ${user.name.first} ${user.name.last}`}
              email={user.email}
              viewProfileLink={
                <Link to="/team/:id" state={{ user }} className="view-profile-btn">
                  <FaRegUser style={{marginRight:"6px"}}/>
                  View Profile
                </Link>
              }
            />
          ))}
        </div>
      </div>

      <div className="load-more-wrapper">
        <button onClick={handleLoadMore} className="loadMore">
          Load More
        </button>
      </div>
    </>
  );
}
