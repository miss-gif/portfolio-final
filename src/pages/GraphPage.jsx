import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const GraphPage = () => {
  const [dailyData, setDailyData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [totalData, setTotalData] = useState(null);
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const [error, setError] = useState(null); // 에러 상태 추가

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // 로딩 시작
      setError(null); // 이전 에러 상태 초기화
      try {
        const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
        const month = new Date().toISOString().slice(0, 7); // YYYY-MM

        // 데이터 참조
        const dailyRef = collection(db, "visitors");
        const monthlyRef = doc(db, "visitors", `monthlyViews-${month}`);
        const totalRef = doc(db, "visitors", "totalViews");

        // 병렬로 데이터 가져오기
        const [dailySnapshot, monthlySnapshot, totalSnapshot] =
          await Promise.all([
            getDocs(dailyRef),
            getDoc(monthlyRef),
            getDoc(totalRef),
          ]);

        // 일별 데이터 처리
        const dailyChartData = [];
        dailySnapshot.forEach((doc) => {
          const docData = doc.data();
          if (doc.id.startsWith("dailyViews")) {
            dailyChartData.push({
              date: docData.date, // Assuming date is stored in 'date' field
              count: docData.count || 0,
            });
          }
        });
        dailyChartData.sort((a, b) => new Date(a.date) - new Date(b.date));
        setDailyData(dailyChartData);

        // 주간 데이터 계산 로직 추가
        const weeklyChartData = calculateWeeklyData(dailyChartData);
        setWeeklyData(weeklyChartData);

        // 월별 데이터 처리
        if (monthlySnapshot.exists()) {
          const monthlyData = monthlySnapshot.data();
          setMonthlyData(
            Object.entries(monthlyData).map(([date, count]) => ({
              date,
              count,
            }))
          );
        } else {
          console.warn("월별 데이터가 존재하지 않습니다.");
        }

        // 전체 데이터 처리
        const totalData = totalSnapshot.exists() ? totalSnapshot.data() : {};
        setTotalData(totalData.count || 0);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다.", error);
        setError("데이터를 가져오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false); // 로딩 종료
      }
    };

    fetchData();
  }, []);

  // 주간 데이터 계산 함수
  const calculateWeeklyData = (dailyData) => {
    const weeklyDataMap = new Map(); // 주차를 기준으로 데이터를 저장할 Map

    dailyData.forEach(({ date, count }) => {
      const currentDate = new Date(date);
      const firstDayOfYear = new Date(currentDate.getFullYear(), 0, 1);
      const pastDaysOfYear =
        (currentDate - firstDayOfYear) / (1000 * 60 * 60 * 24); // 1년 중 지난 일수

      const weekNumber = Math.ceil(
        (pastDaysOfYear + firstDayOfYear.getDay()) / 7
      ); // 주차 계산
      const yearWeekKey = `${currentDate.getFullYear()}-W${weekNumber}`; // 연도와 주차 결합

      if (!weeklyDataMap.has(yearWeekKey)) {
        weeklyDataMap.set(yearWeekKey, 0);
      }

      // 해당 주차에 방문자 수를 더해줌
      weeklyDataMap.set(yearWeekKey, weeklyDataMap.get(yearWeekKey) + count);
    });

    // Map을 배열로 변환
    return Array.from(weeklyDataMap.entries()).map(([week, count]) => ({
      date: week,
      count,
    }));
  };

  if (loading) {
    return <div>로딩 중...</div>; // 로딩 상태일 때 표시할 컴포넌트
  }

  if (error) {
    return <div>{error}</div>; // 에러 발생 시 표시할 컴포넌트
  }

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-8">
      <h2 className="text-2xl font-bold">방문자 수 차트</h2>

      <div className="flex justify-center items-center w-full max-w-4xl gap-10">
        <div className="flex flex-col items-center w-1/2">
          <h3 className="text-xl font-semibold mb-4">일별 방문자 수</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col items-center w-96">
          <h3 className="text-xl font-semibold mb-4">주간 방문자 수</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#82ca9d"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex flex-col items-center w-96">
          <h3 className="text-xl font-semibold mb-4">월별 방문자 수</h3>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#ffc658"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-4">전체 방문자 수</h3>
        <div className="text-3xl font-bold">{totalData}명</div>
      </div>
    </div>
  );
};

export default GraphPage;
