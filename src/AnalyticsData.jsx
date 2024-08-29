// AnalyticsData.js
import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";

const AnalyticsData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const initClient = () => {
      gapi.client
        .init({
          apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
          clientId:
            "1050234925549-joutk8k8lshe57v5thcagmflkl6qhd12.apps.googleusercontent.com",
          discoveryDocs: [
            "https://analyticsreporting.googleapis.com/$discovery/rest?version=v4",
          ],
          scope: "https://www.googleapis.com/auth/analytics.readonly",
        })
        .then(() => {
          return gapi.auth2.getAuthInstance().signIn();
        })
        .then(() => {
          return gapi.client.analyticsreporting.reports.batchGet({
            reportRequests: [
              {
                viewId: "svx327",
                dateRanges: [{ startDate: "30daysAgo", endDate: "today" }],
                metrics: [{ expression: "ga:sessions" }],
              },
            ],
          });
        })
        .then((response) => {
          setData(response.result);
        })
        .catch((error) => {
          console.error("Error fetching analytics data:", error);
        });
    };

    gapi.load("client:auth2", initClient);
  }, []);

  return (
    <div>
      <h2>Analytics Data</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default AnalyticsData;
