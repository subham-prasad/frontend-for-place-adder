import React from "react";
import UsersList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Subham Prasad",
      image:'https://blog.thomascook.in/wp-content/uploads/2017/01/Santorini-Greece.jpg',
      places: 3,
    },
  ];

  return <UsersList items={USERS}/>;
};

export default Users;
