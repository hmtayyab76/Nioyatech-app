import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import LandingPages from "./Landing_Pages/LandingPages";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShieldRiser from "./Dashboard/ShieldRiser";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<ShieldRiser />} />
          <Route exact path="/home" element={<LandingPages />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
