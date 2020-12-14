import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./routers/Router";

export default function App() {
  return (
    <Router>
        <Header /> 
        <Routes />
    </Router>
  );
}

