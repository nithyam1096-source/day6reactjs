import React from "react";
import Child from "./Child";

export default function Parent() {
  return (
    <div>
      <Child text="This is child component 1" />
      <Child text="This is child component 2" />
    </div>
  );
}