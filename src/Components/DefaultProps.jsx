import React from "react";

export default function DefaultProps({ name = "Guest" }) {
  return <h3>Welcome {name}</h3>;
}