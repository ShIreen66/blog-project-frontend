import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import { Provider } from "react-redux";
// import { store } from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
      <>
        <App />
        <ToastContainer position="top-right" autoClose={3000} />
      </>
    {/* </Provider> */}
  </BrowserRouter>
);
