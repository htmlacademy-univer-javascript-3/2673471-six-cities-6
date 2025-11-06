import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {favorites, Settings} from './const.ts';
import {offers} from './mocks/offers.ts';
import 'leaflet/dist/leaflet.css';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App authorizationStatus={Settings.AuthorizationStatus} offers={offers} favorites={favorites}/>
  </React.StrictMode>
);
