import { Route, Routes } from "react-router-dom";
import Cv from "./components/cv/index.tsx";
import HomePage from "./pages/HomePage.tsx";
import NotFound from "./pages/NotFound.tsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
