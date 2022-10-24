import React, { useState, useEffect } from 'react';


const url = `https://randomuser.me/api`;

const FetchUsers = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUserData = async() => {
      const res = await fetch(url);
      const users = await res.json();
      setUsers(users.results);
    }

    fetchUserData();

  }, [])
  

  return (
    <>
    <section>
      {users.map((user) => {
        // destructuring
      })}
    </section>
    </>
  )
}

export default FetchUsers;