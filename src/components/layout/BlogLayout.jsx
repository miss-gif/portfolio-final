import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const BlogLayout = () => {
  return (
    <div className="blog-layout">
      <Header />
      <main className="h-screen flex justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
};

export default BlogLayout;
