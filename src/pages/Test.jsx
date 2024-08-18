// Test.js
import React from "react";
import { useStore } from "../store/store"; // store.js 파일에서 내보낸 스토어를 가져옵니다.

function Test() {
  const { count, increase, decrease } = useStore(); // 스토어의 상태와 함수에 접근합니다.

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default Test;
