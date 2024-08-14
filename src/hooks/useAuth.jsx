import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, storage, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const useAuth = () => {
  const [userCurrent, setUserCurrent] = useState(null);
  const [userData, setUserData] = useState(null);

  const fetchUserData = async (who) => {
    if (!who) {
      return;
    }

    const userInfoGetDoc = doc(db, "users", who.uid);
    const docSnap = await getDoc(userInfoGetDoc);
    console.log("db", db);
    console.log("who", who);
    console.log("uid", who.uid);
    console.log("docSnap", docSnap);

    if (docSnap.exists()) {
      // {name:"홍길동", email:"a@a.net", imageUrl: "~~~"}
      setUserData(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  // FB 는 로그인 시도를 하면 사용자의 로그인 상태를 실시간으로 변경
  useEffect(() => {
    // FB 연결하면 사용자의 인증 즉, 로그인, 회원가입, 로그인 실행
    // 자동으로 onAuthStateChanged 가 실행된다.
    const onAuth = onAuthStateChanged(auth, async (who) => {
      console.log("인증 실시간 결과 알려줌. onAuthStateChanged ", who);

      if (who) {
        // console.log(who);
        // console.log(auth.currentUser);
        // who == auth.currentUser 이다.
        setUserCurrent(who);

        // const uid = who.uid;
        // console.log("사용자 상태가 바뀜 uid : ", uid);
        // 로그인에 의해 리턴된 모든 정보를 보관해 둔다.
        // console.log("사용자 정보 : ", who);
        // 로그인했으므로 true
        // setUser(true);
        // DataBase 에 진입해서 사용자 정보관련 내용을 읽어들인다.
        await fetchUserData(who);
      } else {
        // 로그아웃 실시간 처리
        setUserData(null);
        // setUser(false);
        setUserCurrent(null);
      }
    });

    // 클린업 함수
    return () => onAuth();
  }, []);

  return {
    // user,
    // setUser,
    userData,
    setUserData,
    userCurrent,
    setUserCurrent,
  };
};
export default useAuth;
