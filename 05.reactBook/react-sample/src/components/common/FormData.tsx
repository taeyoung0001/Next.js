import React, { useState } from "react";
import Input from "components/common/Input";
import Button from "components/common/button";

const FormData = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [data, setData] = useState({ userName: "", userPassword: "" });
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUserName(e.target.value);
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUserPassword(e.target.value);
  };

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    setData({ userName, userPassword });
    e.preventDefault();
  };

  return (
    <form onSubmit={handleForm}>
      <Input type="text" label="아이디" onChange={handleNameChange} />
      <Input type="password" label="비밀번호" onChange={handlePasswordChange} />
      <Button className="square" title="전송" />
    </form>
  );
};

export default FormData;
