import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Sidebar from '../sidebar/Sidebar';

import HomePage from '../home/HomePage';
import VotingPage from '../voting/VotingPage';
import NotFound from '../404/404';

import store from '../../redux/reducers/index';

import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Sidebar />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/voting">
            <VotingPage />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;