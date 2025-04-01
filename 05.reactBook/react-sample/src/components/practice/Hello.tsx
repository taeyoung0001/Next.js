const Hello = () => {
  const onClick = () => {
    alert("hello");
  };
  const text = "Hello, React";

  return (
    <div style={{ padding: "16px", backgroundColor: "grey" }} onClick={onClick}>
      {text}
    </div>
  );
};
export default Hello;
