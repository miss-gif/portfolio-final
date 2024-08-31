// src/components/RemoteConfig.js
import React, { useEffect, useState } from "react";
import {
  getRemoteConfig,
  fetchAndActivate,
  getValue,
} from "firebase/remote-config";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // 기존 설정
};

const app = initializeApp(firebaseConfig);
const remoteConfig = getRemoteConfig(app);
remoteConfig.settings = {
  minimumFetchIntervalMillis: 3600000, // 1시간
};
remoteConfig.defaultConfig = {
  welcome_message: "환영합니다!",
};

const RemoteConfigComponent = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchConfig = async () => {
      await fetchAndActivate(remoteConfig);
      const welcomeMessage = getValue(
        remoteConfig,
        "welcome_message"
      ).asString();
      setMessage(welcomeMessage);
    };
    fetchConfig();
  }, []);

  return (
    <div>
      <h2>원격 설정</h2>
      <p>{message}</p>
    </div>
  );
};

export default RemoteConfigComponent;
