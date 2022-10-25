import React, { useState, useEffect} from "react";
import Pagination from "./Pagination";
import Users from "./Users";
import { Routes, Route, Link } from "react-router-dom";

const url = `https://randomuser.me/api/?results=300`;

const App = () => {
    const [users, setUsers] = useState([]);
    const[loading, setLoading] = useState(false);
    const[currentPage, setCurrentPage] = useState(1);
    const[usersPerPage, setUsersPerPage] = useState(10);
  
    // fetch API
    useEffect(() => {
      const fetchUserData = async () => {
        setLoading(true);
        const res = await fetch(url);
        const users = await res.json();
        setUsers(users.results);
        setLoading(false);
      };
  
      fetchUserData();
    }, []);

    // get current users
    const indexOfLastUser = currentPage * usersPerPage
    const indexOfFirstUser = indexOfLastUser - usersPerPage
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)

  return (
    <>
    <Users users={currentUsers} loading={loading} />
    <Pagination usersPerPage={usersPerPage} totalUsers={users.length} />
    </>
  );
}

export default App;
