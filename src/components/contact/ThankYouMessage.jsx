import React from "react";

const ThankYouMessage = ({ onReset }) => (
  <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
      문의해주셔서 감사합니다!
      <br />
      최대한 빠르게 답변드리겠습니다.
    </h2>
    <button
      onClick={onReset}
      className="px-4 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition duration-200"
    >
      추가 문의
    </button>
  </div>
);

export default ThankYouMessage;
