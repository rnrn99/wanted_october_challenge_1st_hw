import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes/Router";
import Route from "./routes/Route";
import Root from "./pages/Root";
import About from "./pages/About";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Route path="/" element={<Root />} />
      <Route path="/about" element={<About />} />
    </Router>
  </React.StrictMode>,
);
