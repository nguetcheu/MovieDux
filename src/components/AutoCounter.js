import React, { useEffect, useState } from "react";

export default function AutoCounter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((count) => count + 1);
  };

  const decreaseCount = () => {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div>
      {<button onClick={increaseCount}>+</button>}
      {<button onClick={decreaseCount}>-</button>}
    </div>
  );
}
