import { Route, Routes } from "react-router-dom";
import Cv from "./components/cv/index";
import AuthLayout from "./components/layout/AuthLayout";
import RootLayout from "./components/layout/RootLayout";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Test from "./pages/Test";
import Profile from "./components/Profile/Profile.jsx";
import ProfileEdit from "./components/Profile/ProfileEdit.jsx";

const App = () => {
  return (
    <Routes>
      {/* 인증 페이지 */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<AuthPage />} />
      </Route>

      {/* 소개 페이지 */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile-edit" element={<ProfileEdit />} />
      </Route>

      {/* 서브 링크 */}
      <Route path="/cv" element={<Cv />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
