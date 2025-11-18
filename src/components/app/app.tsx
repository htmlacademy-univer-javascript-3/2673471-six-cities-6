import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen.tsx';
import NotFound from '../../pages/not-found-screen/not-found-screen.tsx';
import LoginScreen from '../../pages/login-screen/login-screen.tsx';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen.tsx';
import OfferScreen from '../../pages/offer-screen/offer-screen.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import {OfferType} from '../../types/offerType.ts';
import {reviews} from '../../mocks/reviews.ts';
import {useAppSelector} from '../../hooks';

type AppProps = {
  authorizationStatus: AuthorizationStatus;
  favorites: OfferType[];
}

export default function App({authorizationStatus, favorites}: AppProps) {
  const offers = useAppSelector((state) => state.offers);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainScreen
              favoriteCount={favorites.length}
            />
          }
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen/>}
        />
        <Route
          path={AppRoute.Favourites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus} redirectTo={AppRoute.Login}>
              <FavoritesScreen favorites={favorites}/>
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Offer}/:offerId`}
          element={
            <OfferScreen
              offers={offers}
              favoriteCount={favorites.length}
              reviews={reviews}
            />
          }
        />
        <Route
          path={AppRoute.NotFound}
          element={<NotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
