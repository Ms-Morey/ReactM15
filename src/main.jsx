import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import Store from "./What_is_Components/ContextAPI/SubComponents/Store.jsx";
import { Provider } from "react-redux";
import { store } from "./ReduxToolkit/Store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
