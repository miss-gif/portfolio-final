import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import dayjs from "dayjs";

const AsideHotPost = () => {
  const [todayPosts, setTodayPosts] = useState([]);
  const [weeklyPosts, setWeeklyPosts] = useState([]);
  const [monthlyPosts, setMonthlyPosts] = useState([]);
  const [realtimeKeywords, setRealtimeKeywords] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const today = dayjs().startOf("day").toDate();
      const oneWeekAgo = dayjs().subtract(7, "day").startOf("day").toDate();
      const oneMonthAgo = dayjs().subtract(1, "month").startOf("day").toDate();

      const postsRef = collection(db, "posts");

      // 오늘의 인기글
      const todayQuery = query(
        postsRef,
        where("date", ">=", today),
        orderBy("views", "desc"),
        limit(6)
      );
      const todaySnapshot = await getDocs(todayQuery);
      setTodayPosts(todaySnapshot.docs.map((doc) => doc.data()));

      // 주간 인기글
      const weeklyQuery = query(
        postsRef,
        where("date", ">=", oneWeekAgo),
        orderBy("views", "desc"),
        limit(6)
      );
      const weeklySnapshot = await getDocs(weeklyQuery);
      setWeeklyPosts(weeklySnapshot.docs.map((doc) => doc.data()));

      // 월간 인기글
      const monthlyQuery = query(
        postsRef,
        where("date", ">=", oneMonthAgo),
        orderBy("views", "desc"),
        limit(6)
      );
      const monthlySnapshot = await getDocs(monthlyQuery);
      setMonthlyPosts(monthlySnapshot.docs.map((doc) => doc.data()));

      // 실시간 검색어는 별도의 컬렉션에서 가져온다고 가정
      const keywordsRef = collection(db, "searchKeywords");
      const keywordsSnapshot = await getDocs(
        query(keywordsRef, orderBy("count", "desc"), limit(10))
      );
      setRealtimeKeywords(
        keywordsSnapshot.docs.map((doc) => doc.data().keyword)
      );
    };

    fetchPosts();
  }, []);

  return (
    <aside className="aside-hot-post">
      <h2>오늘의 인기글</h2>
      <ul>
        {todayPosts.length > 0 ? (
          todayPosts.map((post, index) => <li key={index}>{post.title}</li>)
        ) : (
          <li>데이터를 불러오는 중...</li>
        )}
      </ul>

      <h2>주간 인기글</h2>
      <ul>
        {weeklyPosts.length > 0 ? (
          weeklyPosts.map((post, index) => <li key={index}>{post.title}</li>)
        ) : (
          <li>데이터를 불러오는 중...</li>
        )}
      </ul>

      <h2>월간 인기글</h2>
      <ul>
        {monthlyPosts.length > 0 ? (
          monthlyPosts.map((post, index) => <li key={index}>{post.title}</li>)
        ) : (
          <li>데이터를 불러오는 중...</li>
        )}
      </ul>

      <h2>실시간 검색어 순위</h2>
      <ul>
        {realtimeKeywords.length > 0 ? (
          realtimeKeywords.map((keyword, index) => (
            <li key={index}>
              {index + 1}. {keyword}
            </li>
          ))
        ) : (
          <li>데이터를 불러오는 중...</li>
        )}
      </ul>
    </aside>
  );
};

export default AsideHotPost;
