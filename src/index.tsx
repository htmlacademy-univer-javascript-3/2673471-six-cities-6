import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import 'leaflet/dist/leaflet.css';
import App from './components/app/app.tsx';
import {favorites, Settings} from './const.ts';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App authorizationStatus={Settings.AuthorizationStatus} favorites={favorites}/>
    </Provider>
  </React.StrictMode>
);
