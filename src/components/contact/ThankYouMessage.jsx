// ThankYouMessage.js
import React from "react";

const ThankYouMessage = ({ onReset }) => (
  <div className="thankyou_message">
    <h2>
      문의해주셔서 감사합니다!
      <br />
      최대한 빠르게 답변드리겠습니다.
    </h2>
    <button onClick={onReset}>추가 문의</button>
  </div>
);

export default ThankYouMessage;
