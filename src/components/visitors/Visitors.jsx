import { format } from "date-fns";
import { doc, runTransaction } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { db } from "../../firebaseConfig";

const Visitors = () => {
  const [todayCount, setTodayCount] = useState(null);
  const [monthCount, setMonthCount] = useState(null);
  const [totalCount, setTotalCount] = useState(null);
  const [cookies, setCookie] = useCookies(["lastVisit"]);

  useEffect(() => {
    const incrementPageViews = async () => {
      const today = format(new Date(), "yyyy-MM-dd");
      const month = format(new Date(), "yyyy-MM");

      // 쿠키가 있는지 확인
      if (cookies.lastVisit) {
        console.log("쿠키가 존재하여 카운트를 증가시키지 않습니다.");
        return;
      }

      try {
        await runTransaction(db, async (transaction) => {
          const totalRef = doc(db, "visitors", "totalViews");
          const dailyRef = doc(db, "visitors", `dailyViews-${today}`);
          const monthlyRef = doc(db, "visitors", `monthlyViews-${month}`);

          const totalSnap = await transaction.get(totalRef);
          const dailySnap = await transaction.get(dailyRef);
          const monthlySnap = await transaction.get(monthlyRef);

          const newTotalCount = totalSnap.exists()
            ? totalSnap.data().count + 1
            : 1;
          const newTodayCount = dailySnap.exists()
            ? dailySnap.data().count + 1
            : 1;
          const newMonthCount = monthlySnap.exists()
            ? monthlySnap.data().count + 1
            : 1;

          transaction.set(totalRef, { count: newTotalCount }, { merge: true });
          transaction.set(
            dailyRef,
            { count: newTodayCount, date: today },
            { merge: true }
          );
          transaction.set(
            monthlyRef,
            { count: newMonthCount, date: month },
            { merge: true }
          );

          setTotalCount(newTotalCount);
          setTodayCount(newTodayCount);
          setMonthCount(newMonthCount);
          toast.success("방문해 주셔서 감사합니다!");
          toast.success(`오늘 방문자 수: ${newTodayCount}`);
        });

        // 방문 기록을 쿠키에 저장 (1시간 유효)
        setCookie("lastVisit", "true", { path: "/", maxAge: 3600 });
      } catch (error) {
        toast.error("방문자 수 증가 실패");
      }
    };

    incrementPageViews();
  }, [setCookie]);

  return;
};

export default Visitors;
