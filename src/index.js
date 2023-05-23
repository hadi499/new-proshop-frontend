import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import { RouterProvider } from "react-router-dom";
import router from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
