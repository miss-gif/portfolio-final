// src/components/PushNotifications.js
import React, { useEffect } from "react";
import { messaging } from "../../firebaseConfig";
import { getToken, onMessage } from "firebase/messaging";

const PushNotifications = () => {
  useEffect(() => {
    // 사용자에게 알림 권한 요청
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        getToken(messaging, { vapidKey: "YOUR_VAPID_KEY" })
          .then((currentToken) => {
            if (currentToken) {
              console.log("FCM Token:", currentToken);
              // 서버에 토큰 저장 로직 추가
            } else {
              console.log("No registration token available.");
            }
          })
          .catch((err) => {
            console.error("An error occurred while retrieving token.", err);
          });
      }
    });

    // 메시지 수신
    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
      // 사용자에게 알림 표시 로직 추가
    });
  }, []);

  return (
    <div>
      <h2>푸시 알림 관리</h2>
      <p>알림을 설정했습니다.</p>
    </div>
  );
};

export default PushNotifications;
