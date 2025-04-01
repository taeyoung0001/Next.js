import React, { useState, useCallback } from "react";

export default function ParentComponent() {
  const [count, setCount] = useState<number>(0);

  // useCallback 사용
  const handleClick = useCallback(() => {
    setCount((prev) => prev - 1);
    console.log("콜백 사용됨!");
  }, []); // 의존성 배열 비워두면 최초 1회 생성 후 재사용

  const handleIncrease = useCallback(() => {
    setCount((prev) => prev + 1);
    console.log("증가 콜백 함수");
  }, []);
  console.log("본문 랜더링");
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
}
type ChildComponentProps = {
  onClick: () => void;
};
function ChildComponent(props: ChildComponentProps) {
  const { onClick } = props;
  console.log("ChildComponent 렌더링!");
  return <button onClick={onClick}>Click Me</button>;
}

// useCallback은 함수 재생성을 방지하는 최적화 도구야.

// props로 전달하는 함수나 불필요한 리렌더링을 막고 싶을 때 사용해!

// 단순 이벤트 핸들러나 내부 함수에는 안 써도 됨.

// 성능 최적화는 필요할 때만! 남용하면 오히려 안 좋아.
