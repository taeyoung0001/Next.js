import { useState } from "react";

type CounterProps = {
  initialValue: number;
};
const Counter = (props: CounterProps) => {
  const { initialValue } = props;
  const [count, setCount] = useState(initialValue);
  return (
    <div>
      <p> count : {count}</p>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default Counter;
