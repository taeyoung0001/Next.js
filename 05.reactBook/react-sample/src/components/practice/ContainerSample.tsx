import React from "react";

type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

const ContainerSample = (props: ContainerProps) => {
  const { title, children } = props;

  return (
    <div style={{ backgroundColor: "red" }}>
      <span>{title}</span>

      <div>{children}</div>
    </div>
  );
};

const Parent = () => {
  return (
    <ContainerSample title={"Hello"}>
      <p>이부분이 배경색으로 둘러싸여있습니다.</p>
    </ContainerSample>
  );
};
export default Parent;
