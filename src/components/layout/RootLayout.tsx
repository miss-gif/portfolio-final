import { Outlet } from "react-router-dom";
import GlobalNav from "../GlobalNav/index";
import GlobalSetting from "../GlobalSetting";
import Footer from "./Footer";
import Header from "./Header";

// import MouseCursor from "./MouseCursor/MouseCursor";

const RootLayout = () => {
  return (
    <>
      {/* <MouseCursor /> */}
      <Header />
      <GlobalNav />
      <GlobalSetting>
        <Outlet />
      </GlobalSetting>
      <Footer />
    </>
  );
};

export default RootLayout;
