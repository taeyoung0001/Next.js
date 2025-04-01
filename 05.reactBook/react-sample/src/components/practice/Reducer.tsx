import { useReducer } from "react";

type Action = "DECREMENT" | "INCREMENT" | "DOUBLE" | "RESET";

const reducer = (currentCount: number, acton: Action) => {
  switch (acton) {
    case "INCREMENT":
      return currentCount + 1;
    case "DECREMENT":
      return currentCount - 1;
    case "DOUBLE":
      return currentCount * 2;
    case "RESET":
      return 0;
    default:
      return currentCount;
  }
};

type CounterProps = {
  initialValue: number;
};

const ReducerCounter = (props: CounterProps) => {
  const { initialValue } = props;
  //reducer 사용 dispatch로 놓고 사용함함
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <p>Count : {count}</p>
      <button
        onClick={() => {
          dispatch("DECREMENT");
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch("DOUBLE");
        }}
      >
        X
      </button>
      <button
        onClick={() => {
          dispatch("RESET");
        }}
      >
        0
      </button>
      <button
        onClick={() => {
          dispatch("DECREMENT");
        }}
      >
        -
      </button>
    </div>
  );
};

export default ReducerCounter;
