import React from "react";
import styles from "style/component/Form.module.scss";
import cn from "classnames/bind";
import FormData from "components/common/FormData";

const cx = cn.bind(styles);

const LoginPage = () => {
  return (
    <div>
      <h2 className={cx("title")}>로그인</h2>
      <FormData />
    </div>
  );
};

export default LoginPage;
