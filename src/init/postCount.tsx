import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

// 메타데이터 문서 생성 및 초기화
export const initializeCounters = async () => {
  const counterDoc = doc(db, "counters", "postCount");
  const counterSnap = await getDoc(counterDoc);

  if (!counterSnap.exists()) {
    await setDoc(counterDoc, { count: 0 });
  }
};
