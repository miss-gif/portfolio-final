import { Route, Routes } from "react-router-dom";
import Test from "./Test.jsx";
import Profile from "./components/Profile/Profile.jsx";
import ProfileEdit from "./components/Profile/ProfileEdit.jsx";
import FindPass from "./components/auth/FindPass.jsx";
import Cv from "./components/cv/index";
import AuthLayout from "./components/layout/AuthLayout";
import BlogLayout from "./components/layout/BlogLayout";
import RootLayout from "./components/layout/RootLayout";
import Notice from "./components/notice/Notice.jsx";
import PostDetail from "./components/notice/PostDetail.jsx";
import PostEdit from "./components/notice/PostEdit.jsx";
import PostWrite from "./components/notice/PostWrite.jsx";
import usePosts from "./hooks/usePosts.jsx"; // Custom hook import
import AuthPage from "./pages/AuthPage";
import GraphPage from "./pages/GraphPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import AdminPage from "./pages/AdminPage.jsx";

const App = () => {
  const { posts, addPost, handleDelete, handleUpdate, postIdRef } = usePosts();

  return (
    <Routes>
      {/* 인증 페이지 */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<AuthPage />} />
        <Route path="/auth/findpass" element={<FindPass />} />
      </Route>

      {/* 메인 페이지 */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile-edit" element={<ProfileEdit />} />
      </Route>

      {/* 블로그/공지사항 관련 페이지 */}
      <Route path="/" element={<BlogLayout />}>
        <Route path="graph" element={<GraphPage />} />
        <Route path="notice" element={<Notice posts={posts} />} />
        <Route
          path="notice/write"
          element={<PostWrite addPost={addPost} postIdRef={postIdRef} />}
        />
        <Route
          path="notice/post/:postId"
          element={<PostDetail posts={posts} onDelete={handleDelete} />}
        />
        <Route
          path="notice/edit/:postId"
          element={<PostEdit posts={posts} onUpdate={handleUpdate} />}
        />
        <Route path="/admin" element={<AdminPage />} />
      </Route>

      {/* 기타 서브 링크 */}
      <Route path="/cv" element={<Cv />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
