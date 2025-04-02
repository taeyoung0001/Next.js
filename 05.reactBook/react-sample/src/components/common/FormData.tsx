import React, { useState } from "react";
import Input from "components/common/Input";
import Button from "components/common/button";
import { useNavigate } from "react-router-dom";

const FormData = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userName, setUserName] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userPassword, setUserPassword] = useState("");
  const [data, setData] = useState({ userName: "", userPassword: "" });
  const navigate = useNavigate();

  const handleInputChange =
    (key: "userName" | "userPassword") =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      key === "userName" ? setUserName(value) : setUserPassword(value);
      setData((prevData) => ({
        ...prevData,
        [key]: value,
      }));
    };

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(
      "https://67eb4faf34bcedd95f65f719.mockapi.io/api/testServer/user"
    );
    const resData = await res.json();
    console.log(resData);
    for (let i = 0; i < resData.length; i++) {
      if (resData[i].userName === data.userName) {
        if (resData[i].userPassword === data.userPassword) {
          alert("login성공");
          localStorage.setItem("name", data.userName);
          navigate("/");
          return;
        }
      }
    }

    alert("로그인실패");
  };

  return (
    <form onSubmit={handleForm}>
      <Input
        type="text"
        label="아이디"
        onChange={handleInputChange("userName")}
      />
      <Input
        type="password"
        label="비밀번호"
        onChange={handleInputChange("userPassword")}
      />
      <Button type="submit" className="square" title="전송" />
    </form>
  );
};

export default FormData;
