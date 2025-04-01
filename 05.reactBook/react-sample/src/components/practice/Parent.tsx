import { memo, useState } from "react";

type FizzProps = {
  isFizz: boolean;
};

const Fizz = (props: FizzProps) => {
  const { isFizz } = props;
  console.log(`Fizz 가 다시 그려졌음, isFizz=${isFizz}`);
  return <span>{isFizz ? "Fizz" : ""}</span>;
};
type BuzzProps = {
  isBuzz: boolean;
  onClick: () => void;
};

const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz, onClick } = props;
  console.log(`Buzz 가 다시 그려졌음, isFizz=${isBuzz}`);

  return <span onClick={onClick}>{isBuzz ? "buzz" : ""}</span>;
});

const Parent = () => {
  const [count, setCount] = useState(1);
  const isFizz = count % 3 === 0;
  const isBuzz = count % 5 === 0;
  console.log(`parent 가 다시 그려짐, count=${count}`);
  const onBuzzClick = () => {
    console.log("Buzz가 클릭됨");
  };
  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +
      </button>
      <p>{count}</p>
      <p>
        <Fizz isFizz={isFizz}></Fizz>
        <Buzz isBuzz={isBuzz} onClick={onBuzzClick}></Buzz>
      </p>
    </div>
  );
};

export default Parent;
