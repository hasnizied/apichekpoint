import axios from "axios";
import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setusers(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h5>this is our users</h5>
      <div className="users">
        {users.map((el, index) => (
          <div key={index} className="user">
            <p>{el.name}</p>
            <p>{el.username}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserList;
