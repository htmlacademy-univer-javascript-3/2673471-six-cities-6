import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import {favorites, Settings} from './const.ts';
import 'leaflet/dist/leaflet.css';
import {Provider} from 'react-redux';
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
