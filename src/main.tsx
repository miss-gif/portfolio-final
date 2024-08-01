import AOS from "aos";
import "aos/dist/aos.css";
import ReactDOM from "react-dom/client";
import Modal from "react-modal";
import App from "./App";
import "./index.scss";

AOS.init({
  duration: 1000, // 애니메이션 지속 시간 (밀리초)
  once: false,
});

Modal.setAppElement("#root");

// 타입 단언(Type Assertion)을 사용하여 'root' 요소를 HTMLDivElement로 지정
const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found");
}
