import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch } from 'react-router'
import Login from "./Login";
import MainContainer from "./Main/MainContainer";

const App = () => {
  return (
      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
            <Route path="/main" component={MainContainer} exact />
        </Switch>
      </Router>
  );
}

export default App;
