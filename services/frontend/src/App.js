import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavigationPanel from "./components/NavigationPanel";
import Routes from "./routers/Router";

export default function App() {
  return (
    <Router>
      <div>
        <NavigationPanel /> 
        <Routes />
      </div>
    </Router>
  );
}
