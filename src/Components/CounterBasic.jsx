import { useState } from "react";

function CounterBasic() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Basic useState Counter</h2>
      <p>Count: {count}</p>
    </div>
  );
}

export default CounterBasic;