import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import MainScreen from '../../pages/main-screen/main-screen.tsx';
import NotFound from '../../pages/not-found-screen/not-found-screen.tsx';
import LoginScreen from '../../pages/login-screen/login-screen.tsx';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen.tsx';
import OfferScreen from '../../pages/offer-screen/offer-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import HistoryRouter from '../history-route/history-route.tsx';
import {browserHistory} from '../../browser-history.ts';

export default function App() {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen/>
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen/>}
        />
        <Route
          path={AppRoute.Favourites}
          element={
            <PrivateRoute redirectTo={AppRoute.Login}>
              <FavoritesScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}/:offerId`}
          element={
            <OfferScreen/>
          }
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFound/>}
        />
      </Routes>
    </HistoryRouter>
  );
}
