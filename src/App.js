import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((previousList) => {
      return [
        ...previousList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    // ! we can use react fragments(<> or <React.Fragment>) to wrap multiple elements
    // ! Because react not allowed to wrap multiple elements in one element
    // <React.Fragment></React.Fragment>
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </>
  );
}

export default App;
