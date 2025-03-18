"use client";

//에러 페이지 만들 경우에는 client로 만들어줘야함

export default function FilterError({ error }) {
  return (
    <div id="error">
      <p>{error.message}</p>
    </div>
  );
}
