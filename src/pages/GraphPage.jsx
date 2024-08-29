import React from "react";
import { useEffect, useState } from "react";
import { analytics } from "../firebaseConfig";
import { logEvent } from "firebase/analytics";
import AnalyticsData from "../AnalyticsData";

const GraphPage = () => {
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
    <div>
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
      <br />
      <br />
      <br />
      <AnalyticsData />
    </div>
  );
};

export default GraphPage;
