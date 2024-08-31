import React from "react";
import DataVisualization from "../components/admin/DataVisualization";
import PostManager from "../components/admin/PostManager";
import PushNotifications from "../components/admin/PushNotifications";
import RealTimeMonitor from "../components/admin/RealTimeMonitor";
import FileManager from "../components/admin/FileManager";

const AdminPage = () => {
  return (
    <>
      <PostManager />
      <RealTimeMonitor />
      <PushNotifications />
      <FileManager />
      <DataVisualization />
    </>
  );
};

export default AdminPage;
