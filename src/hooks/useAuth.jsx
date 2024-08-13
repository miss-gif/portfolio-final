import { useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState(false);

  return { user };
};
export default useAuth;
