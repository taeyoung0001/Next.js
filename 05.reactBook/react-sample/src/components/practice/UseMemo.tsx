import React, { useState, useMemo } from "react";

export default function ExpensiveComponent() {
  const [number, setNumber] = useState(0);
  const [isDark, setIsDark] = useState(false);

  // useMemo 사용
  const expensiveCalculation = useMemo(() => {
    console.log("연산 시작");
    let result = 0;
    for (let i = 0; i < 1000; i++) {
      result += i;
    }
    console.log("메모실행");
    return result + number;
  }, [number]); // number가 변경될 때만 재계산

  const handleTheme = () => {
    setIsDark((prev) => !prev);
    console.log("테마 랜더링");
  };

  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>Result: {expensiveCalculation}</h1>
      <button onClick={() => setNumber(number + 1)}>Increase</button>
      <button onClick={handleTheme}>Toggle Theme</button>
    </div>
  );
}
