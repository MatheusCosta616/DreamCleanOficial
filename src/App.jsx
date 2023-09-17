import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Cabecalho from "./components/cabecalho";
import Rodape from "./components/rodape";
import "./App.css";

export default function App() {
  
  return (
    <div className="app-container">
      <div className="menu">
        <Cabecalho />
      </div>
      <div className="corpo">
        <div className="content">
          <Outlet />
        </div>
        <div className="rodape">
          <Rodape />
        </div>
      </div>
    </div>
  );
}
