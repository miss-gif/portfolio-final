import { Outlet } from "react-router-dom";
import Header from "./Header";

const AuthLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AuthLayout;
