import react from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import SearchPage from "./components/SearchPage/SearchPage";
import ImagesPage from "./components/ImagesPage/ImagesPage";
import NewsPage from "./components/NewsPage/NewsPage";
import VideosPage from "./components/VideosPage/VideosPage";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route exact path="/:id/all">
            <SearchPage />
          </Route>
          <Route exact path="/:id/images">
            <ImagesPage />
          </Route>
          <Route exact path="/:id/news">
            <NewsPage />
          </Route>
          <Route exact path="/:id/videos">
            <VideosPage />
          </Route>
          {/* <Route path="*"><ErrorPage/></Route> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
