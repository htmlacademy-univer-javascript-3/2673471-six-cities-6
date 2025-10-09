import {AppRoute, AuthorizationStatus} from '../../const.js';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Main from '../../pages/main/main.tsx';
import NotFound from '../../pages/not-found/not-found.tsx';
import Login from '../../pages/login/login.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Offer from '../../pages/offer/offer.tsx';
import PrivateRoute from '../private-route/private-route.tsx';

type AppProps = {
  offersCount: number;
  authorizationStatus: AuthorizationStatus;
}
export default function App({offersCount, authorizationStatus}: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main offersCount={offersCount}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login/>}
        />
        <Route
          path={AppRoute.Favourites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer/>}
        />
        <Route
          path="*"
          element={<NotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
