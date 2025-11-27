import { useState } from "react";

function CounterIncrement() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Increment Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default CounterIncrement;