import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />); //App 컴포넌트를 렌더해라
// 부모 컨포넌트를 렌더하면 안에 있는 자식들도 따라서 그려짐
