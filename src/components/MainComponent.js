import React, { useState, useEffect } from "react";

const Main = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    fetch("https://vyorius.herokuapp.com/test/")
      .then((res) => res.json())
      .then((res2) => {
        console.log(res2.message)
        setUsers(res2.message)
      })
      .catch((err) => console.log(err))
  }, []);

  if (users.length === 0) {
    return <h1>Loading...</h1>;
  }

  const userList = users.map((user) => {
    return (
      <li key={user._id}>
        {user.firstName}&nbsp;{user.lastName}
      </li>
    )
  })

  return (
    <>
      <h1>Users List</h1>
      {userList}
    </>
  )
}

export default Main;
