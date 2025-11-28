import React from "react";

function ConditionalAnd() {
  const isLoggedIn = true;

  return (
    <div>
      <h3>Conditional Rendering with &&</h3>
      {isLoggedIn && <p>Hello, User!</p>}
    </div>
  );
}

export default ConditionalAnd;