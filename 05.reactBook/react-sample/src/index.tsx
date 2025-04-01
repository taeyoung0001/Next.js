import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App"; //App.js 에서 APP 함수를 로딩하세요
import reportWebVitals from "./reportWebVitals";
import App from "./App";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // 부적절 감지 헬퍼

  <App />
);

reportWebVitals();
