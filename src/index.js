import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@arcgis/core/assets/esri/themes/dark/main.css";
import esriConfig from "@arcgis/core/config";
import { Grommet } from 'grommet';
import grommetTheme from './theme';

// esriConfig.apiKey = 'AAPK23f9bc16f71742209645bd6b7c7617f6pk58_Lrl1k0lsVNcjzx_jfu-OSaqTbHNOqZVL7lhtXXgQzDWAODub6CNQLaVCRzc';
esriConfig.apiKey = process.env.REACT_APP_API_KEY;

ReactDOM.render(
  <React.StrictMode>
    <Grommet theme={grommetTheme}>
      <App />
    </Grommet>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
