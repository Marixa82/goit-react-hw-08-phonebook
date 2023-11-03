import React from 'react';
import ReactDOM from 'react-dom/client';
import { store, persistor } from './redux/store.js'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import { AppBar } from 'App.jsx';
import { BrowserRouter } from 'react-router-dom';
// import { Navigation } from 'components/Navigation.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AppBar />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
