// ThankYouMessage.js
import React from "react";

const ThankYouMessage = ({ onReset }) => (
  <div className="thankyou_message">
    <h2>
      <em>감사합니다</em> 연락주셔서 감사합니다! 곧 답변드리겠습니다.
    </h2>
    <button onClick={onReset}>더 보내기</button>
  </div>
);

export default ThankYouMessage;
