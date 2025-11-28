import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import 'leaflet/dist/leaflet.css';
import App from './components/app/app.tsx';
import {Settings} from './const.ts';
import {store} from './store';
import {fetchOffersAction} from './store/api-actions.ts';

store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App authorizationStatus={Settings.AuthorizationStatus}/>
    </Provider>
  </React.StrictMode>
);
