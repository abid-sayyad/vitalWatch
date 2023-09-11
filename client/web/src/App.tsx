import React from "react";
import { Link, Route } from "wouter";
import MainLayout from "./layout";
import Home from "./pages/Home";
import Miner from "./pages/Miner";
import Device from "./pages/Device";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <MainLayout>
      <Route path="/miner/:id">{(params) => <Miner id={params.id} />}</Route>
      <Route path="/device">
        <Device />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </MainLayout>
  );
};

export default App;
