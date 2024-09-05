import AOS from "aos";
import "aos/dist/aos.css";
import ReactDOM from "react-dom/client";
import Modal from "react-modal";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "./index.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { initializeCounters } from "./init/postCount";

AOS.init({
  duration: 1000, // 애니메이션 지속 시간 (밀리초)
  once: false,
});

Modal.setAppElement("#root");

// 타입 단언(Type Assertion)을 사용하여 'root' 요소를 HTMLDivElement로 지정
const rootElement = document.getElementById("root") as HTMLElement;

initializeCounters();

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
      <App />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
} else {
  console.error("Root element not found");
}
