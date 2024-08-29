import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const CLIENT_ID =
  "1050234925549-2f037vej3q9dv9251g7fvjofceg799p4.apps.googleusercontent.com"; // GCP에서 발급받은 클라이언트 ID
const API_KEY = "AIzaSyDhtxjjKkGDhX1rtucby2eRf65q3qd_F74"; // GCP에서 발급받은 API 키
const VIEW_ID = "327136871"; // Google Analytics에서 설정한 View ID

function AnalyticsData() {
  const [analyticsData, setAnalyticsData] = useState({});

  useEffect(() => {
    function initClient() {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: [
            "https://analyticsreporting.googleapis.com/$discovery/rest?version=v4",
          ],
          scope: "https://www.googleapis.com/auth/analytics.readonly",
        })
        .then(() => {
          gapi.client.analyticsreporting.reports
            .batchGet({
              reportRequests: [
                {
                  viewId: VIEW_ID,
                  dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
                  metrics: [
                    { expression: "ga:sessions" },
                    { expression: "ga:users" },
                    { expression: "ga:newUsers" },
                    { expression: "ga:pageviews" },
                    { expression: "ga:pageviewsPerSession" },
                    { expression: "ga:avgSessionDuration" },
                    { expression: "ga:bounceRate" },
                  ],
                },
              ],
            })
            .then((response) => {
              const report =
                response.result.reports[0].data.rows[0].metrics[0].values;
              setAnalyticsData({
                sessions: report[0],
                users: report[1],
                newUsers: report[2],
                pageviews: report[3],
                pageviewsPerSession: report[4],
                avgSessionDuration: report[5],
                bounceRate: report[6],
              });
            });
        });
    }

    gapi.load("client:auth2", initClient);
  }, []);

  return (
    <div>
      <h1>Google Analytics 통계</h1>
      <p>총 사용자 수: {analyticsData.users}</p>
      <p>신규 사용자 수: {analyticsData.newUsers}</p>
      <p>세션 수: {analyticsData.sessions}</p>
      <p>페이지뷰 수: {analyticsData.pageviews}</p>
      <p>세션당 페이지뷰: {analyticsData.pageviewsPerSession}</p>
      <p>평균 세션 시간: {analyticsData.avgSessionDuration}</p>
      <p>이탈률: {analyticsData.bounceRate}%</p>
    </div>
  );
}

export default AnalyticsData;
