import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BACK_CONECT} from "./const"
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import dotenv from "dotenv";
import store from './redux/store/store'
dotenv.config();

//para que funcione  hacer npm intall dotenv

axios.defaults.baseURL = process.env.REACT_APP_API || "https://campito-api-production.up.railway.app";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
    <Auth0Provider
        domain="dev-i2ktot5tu17k7x45.us.auth0.com"
        clientId="a5EV2B0kWxPioUIHkQUJIkc9yTnZPnuX"
        redirectUri={"https://el-campito-refugio.vercel.app"}
      >
        <App />
      </Auth0Provider>
    </React.StrictMode>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
