import React from "react";

function ConditionalTernary() {
  const isLoggedIn = false;

  return (
    <div>
      <h3>Ternary Conditional Rendering</h3>
      <p>{isLoggedIn ? "Welcome" : "Please Log In"}</p>
    </div>
  );
}

export default ConditionalTernary;