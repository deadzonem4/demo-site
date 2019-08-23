import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch } from 'react-router-dom';
//----------------Pages
import HomePage from './pages/HomePage';
import PromoPage from './pages/PromoPage';
import LiveScoresPage from './pages/LiveScoresPage';
// ----------------Articles
import AllNewsPage from './pages/articles/AllNewsPage';
import BgFootballPage from './pages/articles/BgFootballPage';
import EuropeFootballPage from './pages/articles/EuropeFootballPage';
import TennisPage from './pages/articles/TennisPage';
import WorldFootballPage from './pages/articles/WorldFootballPage';
import SingleNewsPage from './pages/articles/SingleNewsPage';
// ----------------Events
import LiveEventsPage from './pages/events/LiveEventsPage';
import FinishedEventsPage from './pages/events/FinishedEventsPage';
import FutureEventsPage from './pages/events/FutureEventsPage';
import SingleEventPage from './pages/events/SingleEventPage';
// --------------Error
import ErrorPage from './pages/ErrorPage';
// --------------Layouts
import AppRoute from './layouts/AppRoute';
import MainLayout from './layouts/MainLayout';
import PagesLayout from './layouts/PagesLayout';
//---------------Styles
import './styles/main.css';

const App = props => {

  return (
    <BrowserRouter>
        <Switch>
          {/*------------------------Pages--------------------*/}
          <AppRoute layout={MainLayout} exact path="/" component={HomePage} />
          <AppRoute layout={MainLayout} exact path="/articles" component={HomePage} />
          <AppRoute layout={PagesLayout} exact path="/promotions" component={PromoPage} />
          <AppRoute layout={PagesLayout} exact path="/events" component={LiveScoresPage} />
          {/*------------------------Articles--------------------*/}
          <AppRoute layout={MainLayout} path={"/articles/all/:id"} component={AllNewsPage} />
          <AppRoute layout={MainLayout} path={"/articles/bg-football/:id"} component={BgFootballPage} />
          <AppRoute layout={MainLayout} path={"/articles/europe-football/:id"} component={EuropeFootballPage} />

          <AppRoute layout={MainLayout} exact path="/articles/tennis" component={TennisPage} />
          <AppRoute layout={MainLayout} exact path="/articles/world-football" component={WorldFootballPage} />
          <AppRoute layout={MainLayout} path={"/articles/:id"} component={SingleNewsPage} />
          {/*------------------------Events--------------------*/}
          <AppRoute layout={PagesLayout} exact path="/events/popular" component={LiveScoresPage} />
          <AppRoute layout={PagesLayout} exact path="/events/live" component={LiveEventsPage} />
          <AppRoute layout={PagesLayout} exact path="/events/finished" component={FinishedEventsPage} />
          <AppRoute layout={PagesLayout} exact path="/events/future" component={FutureEventsPage} />
          <AppRoute layout={PagesLayout} path={"/event/:id"} component={SingleEventPage} />
          {/*--------------------------Error--------------------*/}
          <AppRoute layout={PagesLayout} component={ErrorPage} />
        </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

