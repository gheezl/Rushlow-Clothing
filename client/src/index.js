import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"

import store from "./redux/store.js"
import persistor from "./redux/persistStore.js"
import * as serviceWorker from "./serviceWorker.js"

import './index.scss';
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <PersistGate persistor={persistor} >
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();