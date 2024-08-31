// src/components/DataVisualization.js
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const DataVisualization = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "stats"));
    const chartData = querySnapshot.docs.map((doc) => doc.data());
    setData(chartData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>데이터 시각화</h2>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default DataVisualization;
