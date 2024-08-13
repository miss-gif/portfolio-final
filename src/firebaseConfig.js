import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 인증
import { getFirestore } from "firebase/firestore"; // 문서형 데이터베이스
import { getStorage } from "firebase/storage"; // 파일 저장소
import { getDatabase } from "firebase/database"; // 실시간 데이터베이스

// API 키
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Get a non-default Storage bucket
const firebaseApp = getApp();
const storage = getStorage(firebaseApp, "gs://my-custom-bucket");

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
