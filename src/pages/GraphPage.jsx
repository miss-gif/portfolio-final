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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
        const month = new Date().toISOString().slice(0, 7); // YYYY-MM

        // 데이터 참조
        const dailyRef = collection(db, "visitors");
        const weeklyRef = doc(db, "visitors", "weeklyViews");
        const monthlyRef = doc(db, "visitors", `monthlyViews-${month}`);
        const totalRef = doc(db, "visitors", "totalViews");

        // 일별 데이터 가져오기
        const dailySnapshot = await getDocs(dailyRef);
        const dailyChartData = [];
        dailySnapshot.forEach((doc) => {
          const docData = doc.data();
          if (doc.id.startsWith("dailyViews")) {
            const date = docData.date; // Assuming date is stored in 'date' field
            dailyChartData.push({
              date: date,
              count: docData.count || 0,
            });
          }
        });
        dailyChartData.sort((a, b) => new Date(a.date) - new Date(b.date));
        setDailyData(dailyChartData);

        // 주간 데이터 가져오기
        const weeklySnapshot = await getDoc(weeklyRef);
        const weeklyData = weeklySnapshot.exists() ? weeklySnapshot.data() : {};
        setWeeklyData(
          Object.entries(weeklyData).map(([date, count]) => ({ date, count }))
        );

        // 월별 데이터 가져오기
        const monthlySnapshot = await getDoc(monthlyRef);
        const monthlyData = monthlySnapshot.exists()
          ? monthlySnapshot.data()
          : {};
        setMonthlyData(
          Object.entries(monthlyData).map(([date, count]) => ({ date, count }))
        );

        // 전체 데이터 가져오기
        const totalSnapshot = await getDoc(totalRef);
        const totalData = totalSnapshot.exists() ? totalSnapshot.data() : {};
        setTotalData(totalData.count || 0);
      } catch (error) {
        console.error("데이터를 가져오는 중 오류가 발생했습니다.", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-8 space-y-8">
      <h2 className="text-2xl font-bold">방문자 수 차트</h2>

      <div className="flex items-center w-full max-w-4xl space-y-8">
        <div className="flex flex-col items-center">
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

        <div className="flex flex-col items-center">
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

        <div className="flex flex-col items-center">
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

        <div className="flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4">전체 방문자 수</h3>
          <div className="text-3xl font-bold">{totalData}</div>
        </div>
      </div>
    </div>
  );
};

export default GraphPage;
