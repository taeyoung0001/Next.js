import StudentList from "components/student/studentList";
import { useEffect, useState } from "react";
import { StudentType } from "types/student";

const Student = () => {
  const [fetchData, setFetchData] = useState<StudentType[]>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await fetch(
        "https://67eb4faf34bcedd95f65f719.mockapi.io/api/testServer/record"
      );

      if (!res.ok) {
        console.log("res 로딩 실패");
      }
      const data = await res.json();
      setFetchData(data);
    };
    getData();
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? <p>로딩중...</p> : <StudentList fetchData={fetchData} />}
    </div>
  );
};

export default Student;
