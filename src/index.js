import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserHistory } from "history";

// const history = createBrowserHistory();
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter history={history} basename="/portfolio-site">
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/portfolio-site">
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(sole.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
