import React, { useCallback, useDebugValue, useState } from "react";

const useInput = () => {
  const [state, setState] = useState("");
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  }, []);
  useDebugValue(`Input : ${state}`);

  return [state, onchange] as const;
};

const CustomHook = () => {
  const [text, onChangeText] = useInput();
  return (
    <div>
      {/* <input type="text" value={text} onChange={onChangeText} /> */}

      <p>Input : {text}</p>
    </div>
  );
};

export default CustomHook;
