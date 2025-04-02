import Button from "components/common/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handlerMove = (key: string) => {
    if (key === "student") {
      navigate("/student");
    } else if (key === "login") {
      navigate("/login");
    }
  };

  return (
    <div>
      <h2>학생들을 스카웃해가세요</h2>

      <Button onClick={() => handlerMove("student")} title={"학생둘러보기"} />
      <Button onClick={() => handlerMove("login")} title={"로그인"} />
    </div>
  );
};

export default Home;
