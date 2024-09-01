import { Outlet } from "react-router-dom";
import GlobalNav from "../GlobalNav/index";
import GlobalInfo from "../GlobalInfo/indax";
import GlobalSetting from "../GlobalSetting";
import Footer from "./Footer";
import Header from "./Header";

// import MouseCursor from "../MouseCursor/MouseCursor.jsx";

const RootLayout = () => {
  return (
    <>
      {/* <MouseCursor /> */}
      <Header />
      <GlobalNav />
      <Outlet />
      {/* </GlobalSetting> */}
      <GlobalInfo />
      <Footer />
    </>
  );
};

export default RootLayout;
