import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "../userCard/userCard";
import "./userList.css";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=12")
      .then((res) => {
        setUsers(res.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleLoadMore = async () => {
    try {
      const res = await axios.get("https://randomuser.me/api/?results=12");
      setUsers((prev) => [...prev, ...res.data.results]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          {users.map((user, index) => (
            <UserCard
              key={index}
              picture={user.picture.large}
              name={`${user.name.title} ${user.name.first} ${user.name.last}`}
              email={user.email}
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
