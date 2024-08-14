import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, storage, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

/**
 * useAuth 훅은 Firebase 인증 상태를 관리하고, 사용자의 인증 정보와 데이터를 가져오는 기능을 제공합니다.
 * @returns {Object} userCurrent, setUserCurrent, userData, setUserData
 */
const useAuth = () => {
  // 현재 인증된 사용자 상태를 저장하는 state
  const [userCurrent, setUserCurrent] = useState(null);

  // 현재 사용자의 데이터 (예: 이름, 이메일, 프로필 이미지 URL 등) 상태를 저장하는 state
  const [userData, setUserData] = useState(null);

  /**
   * Firebase Firestore에서 현재 사용자의 데이터를 비동기적으로 가져옵니다.
   * @param {Object} who - 현재 인증된 사용자 객체
   */
  const fetchUserData = async (who) => {
    if (!who) {
      return;
    }

    // 사용자의 Firestore 문서 참조를 생성합니다.
    const userInfoGetDoc = doc(db, "users", who.uid);

    // 문서의 스냅샷을 가져옵니다.
    const docSnap = await getDoc(userInfoGetDoc);

    if (docSnap.exists()) {
      // 문서가 존재하면 데이터 상태를 업데이트합니다.
      // 문서의 데이터 형태는 {name:"홍길동", email:"a@a.net", imageUrl: "~~~"}일 수 있습니다.
      setUserData(docSnap.data());
      console.log("docSnap 있음", docSnap);
    } else {
      // 문서가 존재하지 않을 경우, 콘솔에 경고를 출력합니다.
      console.log("docSnap 없음");
    }
  };

  // Firebase 인증 상태가 변경될 때마다 실행되는 useEffect 훅
  useEffect(() => {
    // Firebase 인증 상태를 실시간으로 추적합니다.
    const onAuth = onAuthStateChanged(auth, async (who) => {
      console.log("인증 실시간 결과 onAuthStateChanged :", who);

      if (who) {
        // 사용자가 로그인하면 사용자 상태를 업데이트합니다.
        setUserCurrent(who);

        // 인증된 사용자 정보를 기반으로 Firestore에서 사용자 데이터를 가져옵니다.
        await fetchUserData(who);
      } else {
        // 사용자가 로그아웃하면 상태를 초기화합니다.
        setUserData(null);
        setUserCurrent(null);
      }
    });

    // 컴포넌트가 언마운트될 때 onAuthStateChanged 리스너를 정리합니다.
    return () => onAuth();
  }, []);

  // 훅의 반환 값으로 현재 사용자와 사용자 데이터를 반환합니다.
  return {
    userData, // 사용자 데이터
    setUserData, // 사용자 데이터 설정 함수
    userCurrent, // 현재 인증된 사용자
    setUserCurrent, // 현재 인증된 사용자 설정 함수
  };
};

export default useAuth;
