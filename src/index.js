import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals"; //preforamnce tracking
import { HashRouter } from "react-router-dom"; //for navigation in the website using #
import { Provider } from "react-redux";
import { store } from "./redux/store";

//creating root to render react components
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

reportWebVitals(); //performance tracking function
