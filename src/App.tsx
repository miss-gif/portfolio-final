import { Route, Routes } from "react-router-dom";
import Cv from "./components/cv/index";
import RootLayout from "./components/layout/RootLayout";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="/cv" element={<Cv />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
