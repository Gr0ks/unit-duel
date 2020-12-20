import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'mobx-react';
import Header from "./components/Header";
import Routes from "./routers/Router";
import testStore from "./stores/TestStore";

const stores = { testStore };

export default function App() {
  return (
    <Provider { ...stores }>
      <Router>
        <Header /> 
        <Routes />
      </Router>
    </Provider>
  );
}

