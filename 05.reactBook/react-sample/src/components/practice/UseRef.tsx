import React, { useRef, useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState<number>(0); // 타입 명시

  const timerRef = useRef<NodeJS.Timeout | null>(null); // 💡 타입 지정
  console.log(" 돔 랜더링");
  // ✅ 타이머 시작
  const startTimer = () => {
    console.log(timerRef);
    if (timerRef.current) return; // 중복 실행 방지

    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
      console.log("타이머 작동 중");
      console.log(timerRef);
    }, 1000);
  };

  // ✅ 타이머 정지
  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // ✅ 컴포넌트 언마운트 시 클린업
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h1>⏳ Time: {time}초</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

// useRef는 리렌더링이 일어나도 값이 초기화되지 않음 (직접 갱신해야 함)
// 반면 useState는 값이 변경되면 리렌더링

// ------------

// import React, { useRef, useState } from "react";

// export default function RenderCounter() {
//   const [count, setCount] = useState(0);
//   const [theme, setTheme] = useState(false);
//   const renderCount = useRef(1); // 초기값 1
//   console.log("count랜더링됨");

//   // 매 렌더링 시 renderCount 증가
//   renderCount.current++;

//   const handleTheme = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     e.stopPropagation();
//     console.log("테마 변경 랜더링");
//     setTheme((prev) => !prev);
//   };

//   const handleIncrease = () => {
//     console.log("count 리랜더링됨");
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <h2>Rendered: {renderCount.current} times</h2>
//       <button onClick={handleIncrease}>Increase Count</button>
//       <button
//         style={theme ? { color: "red" } : { color: "black" }}
//         onClick={handleTheme}
//       >
//         테마변경
//       </button>
//     </div>
//   );
// }
