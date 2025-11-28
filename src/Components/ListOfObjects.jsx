import React from "react";

function ListOfObjects() {
  const users = [
    { id: 1, name: "kavin", age: 22 },
    { id: 2, name: "Sara", age: 20 },
    { id: 3, name: "Liya", age: 25 },
  ];

  return (
    <div>
      <h3>List of Objects</h3>
      {users.map((user) => (
        <p key={user.id}>
          {user.name} - {user.age} years old
        </p>
      ))}
    </div>
  );
}

export default ListOfObjects;