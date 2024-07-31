import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import Modal from "react-modal";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000, // 애니메이션 지속 시간 (밀리초)
  once: false,
});

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
