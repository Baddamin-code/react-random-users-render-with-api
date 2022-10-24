import React, { useState, useEffect } from "react";
import moment from "moment";

const url = `https://randomuser.me/api`;

const FetchUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const res = await fetch(url);
      const users = await res.json();
      setUsers(users.results);
    };

    fetchUserData();
  }, []);

  return (
    <>
      <section>
        {users.map((user) => {
          // destructuring
          const {
            picture: { large },
            name: { title, first, last },
            gender,
            location: { country },
            dob: { date, age },
          } = user;

          return (
            <div
              key={user.login.uuid}
              className="flex flex-col w-64 max-w-xs px-4 mt-6 p-4 bg-blue-900 rounded-xl"
            >
              <img src={large} alt="user img" className="rounded-3xl" />
              <h1 className="truncate text-green-300">
                <span className="font-bold">Name: </span>
                {title}. {first} {last}
              </h1>
              <h1 className="truncate text-green-300">
                <span className="font-bold">Gender:</span> {gender}
              </h1>
              <h1 className="truncate text-green-300">
                <span className="font-bold">Age:</span> {age}
              </h1>
              <h1 className="truncate text-green-300">
                <span className="font-bold">Origin:</span> {country}
              </h1>
              <h1 className="truncate text-green-300">
                <span className="font-bold">DOB:</span>{" "}
                {moment(`${date}`).format("MMM Do YYYY")}
              </h1>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default FetchUsers;
