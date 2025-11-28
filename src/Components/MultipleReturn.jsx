import React from "react";

function MultipleReturn() {
  const time = new Date().getHours();
  let message = "";

  if (time < 12) message = "Morning";
  else if (time < 18) message = "Afternoon";
  else message = "Evening";

  return (
    <div>
      <h3>Multiple Returns</h3>
      <p>{message}</p>
    </div>
  );
}

export default MultipleReturn;