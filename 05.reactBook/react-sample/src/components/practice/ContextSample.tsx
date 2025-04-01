import React from "react";

const TitleContext = React.createContext("");

const Title = () => {
  return (
    <TitleContext.Consumer>
      {(title) => {
        return <h1>{title}</h1>;
      }}
    </TitleContext.Consumer>
  );
};

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  );
};

const Page = () => {
  const title = "React Book";

  return (
    <div>
      <TitleContext.Provider value={title}>
        <Header></Header>
      </TitleContext.Provider>
    </div>
  );
};

export default Page;
