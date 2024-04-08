import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import OfferPage from '../pages/offer-page/offer-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import AppRoute from './constants/app-link-const';
import PrivateRoute from './private-route';
import AuthStatus from './constants/auth-const';


type AppPageProps = {
  cardsNumber: number;
};

function App({cardsNumber}:AppPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage cardsNumber = {cardsNumber}/>}/>
      </Routes>

      <Routes>
        <Route path={AppRoute.Login} element={<LoginPage/>}/>
      </Routes>

      <Routes>
        <Route path={AppRoute.Favorites}
          element={
            <PrivateRoute authStatus={AuthStatus.NotAuth}>
              <FavoritesPage/>
            </PrivateRoute>
          }
        />
      </Routes>

      <Routes>
        <Route path={AppRoute.Offer} element={<OfferPage/>}/>
      </Routes>

      <Routes>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
