import React from "react";

import { StudentListType } from "types/student";

import styles from "style/student.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

const StudentList = (props: StudentListType) => {
  const { fetchData } = props;
  console.log(fetchData);
  return (
    <div>
      {fetchData?.map((list) => (
        <div className={cx("student-list")}>
          <img className={cx("student-img")} src={list.avatar} alt="" />
          <p> {list.name}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
