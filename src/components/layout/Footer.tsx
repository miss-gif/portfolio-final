import { format } from "date-fns";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import "./Footer.scss";

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const Footer = () => {
  const [todayCount, setTodayCount] = useState(null);
  const [monthCount, setMonthCount] = useState(null);
  const [totalCount, setTotalCount] = useState(null);

  useEffect(() => {
    const fetchVisitorCounts = async () => {
      try {
        const today = format(new Date(), "yyyy-MM-dd");
        const month = format(new Date(), "yyyy-MM");

        const totalRef = doc(db, "visitors", "totalViews");
        const dailyRef = doc(db, "visitors", `dailyViews-${today}`);
        const monthlyRef = doc(db, "visitors", `monthlyViews-${month}`);

        const totalSnap = await getDoc(totalRef);
        const dailySnap = await getDoc(dailyRef);
        const monthlySnap = await getDoc(monthlyRef);

        if (totalSnap.exists()) {
          setTotalCount(totalSnap.data().count || 0);
        }
        if (dailySnap.exists()) {
          setTodayCount(dailySnap.data().count || 0);
        }
        if (monthlySnap.exists()) {
          setMonthCount(monthlySnap.data().count || 0);
        }
      } catch (error) {
        console.error("방문자 수를 불러오는 중 오류가 발생했습니다.", error);
      }
    };

    fetchVisitorCounts();
  }, []);

  const currentYear = getCurrentYear();

  return (
    <footer className="footer">
      <div className="flex gap-4">
        <p>오늘 방문자 수 : {todayCount}</p>
        <p>이달 방문자 수 : {monthCount}</p>
        <p>총 방문자 수 : {totalCount}</p>
      </div>
      <p> ⓒ {currentYear} miss-gif. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
