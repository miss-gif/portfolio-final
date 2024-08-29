import "./Test.css";
import React, { useEffect, useState } from "react";
import { analytics } from "./firebaseConfig";
import { logEvent } from "firebase/analytics";

const Test = () => {
  const [eventData, setEventData] = useState(null);
  useEffect(() => {
    // 예시 이벤트 추적 (페이지 방문 이벤트)
    logEvent(analytics, "page_view");

    // 이벤트 데이터 받아오기 (여기서는 예시로서 수동으로 설정)
    setEventData({
      eventName: "page_view",
      timestamp: new Date().toISOString(),
    });
  }, []);
  function trackButtonClick() {
    logEvent(analytics, "button_click", { label: "My Button" });
  }

  return (
    <>
      {/* <div className="image-container"> */}
      {/* <img
          src="https://cdn.crowdpic.net/detail-thumb/thumb_d_67889CC3785F8BF598E9C3F1FE04229E.jpg"
          alt="이미지 설명"
        /> */}
      {/* </div> */}
      <div>
        <h1>Google Analytics 통계</h1>
        {eventData ? (
          <div>
            <p>이벤트 이름: {eventData.eventName}</p>
            <p>이벤트 시간: {eventData.timestamp}</p>
          </div>
        ) : (
          <p>데이터를 불러오는 중...</p>
        )}
      </div>
      <button onClick={trackButtonClick}>Click me!</button>
    </>
  );
};

export default Test;
