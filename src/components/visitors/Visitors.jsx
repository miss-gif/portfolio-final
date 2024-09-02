import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import {
  doc,
  getDoc,
  updateDoc,
  setDoc,
  increment,
  runTransaction,
} from "firebase/firestore";
import { format } from "date-fns";

const Visitors = () => {
  const [todayCount, setTodayCount] = useState(0);
  const [monthCount, setMonthCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const incrementPageViews = async () => {
      const today = format(new Date(), "yyyy-MM-dd");
      const month = format(new Date(), "yyyy-MM");

      try {
        await runTransaction(db, async (transaction) => {
          const totalRef = doc(db, "visitors", "totalViews");
          const dailyRef = doc(db, "visitors", `dailyViews-${today}`);
          const monthlyRef = doc(db, "visitors", `monthlyViews-${month}`);

          const totalSnap = await transaction.get(totalRef);
          const dailySnap = await transaction.get(dailyRef);
          const monthlySnap = await transaction.get(monthlyRef);

          if (!totalSnap.exists()) {
            transaction.set(totalRef, { count: 0 });
          }
          if (!dailySnap.exists()) {
            transaction.set(dailyRef, { count: 0, date: today });
          }
          if (!monthlySnap.exists()) {
            transaction.set(monthlyRef, { count: 0, date: month });
          }

          transaction.update(totalRef, { count: increment(1) });
          transaction.update(dailyRef, { count: increment(1) });
          transaction.update(monthlyRef, { count: increment(1) });

          setTotalCount(totalSnap.data()?.count + 1 || 1);
          setTodayCount(dailySnap.data()?.count + 1 || 1);
          setMonthCount(monthlySnap.data()?.count + 1 || 1);
        });
      } catch (error) {
        console.error("방문자 수 증가 실패: ", error);
      }
    };

    incrementPageViews();
  }, []);

  return (
    <div>
      <div>오늘 방문자 수: {todayCount}</div>
      <div>이달 방문자 수: {monthCount}</div>
      <div>총 방문자 수: {totalCount}</div>
    </div>
  );
};

export default Visitors;
