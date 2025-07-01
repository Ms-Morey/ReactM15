import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Store from "./What_is_Components/ContextAPI/SubComponents/Store.jsx";

createRoot(document.getElementById("root")).render(
  <Store>
    <App />
  </Store>
);
