import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchToLogin = () => setIsLogin(true);
  const switchToSignup = () => setIsLogin(false);

  return isLogin ? (
    <Login onSwitchToSignup={switchToSignup} />
  ) : (
    <Signup onSwitchToLogin={switchToLogin} />
  );
};

export default Auth;
