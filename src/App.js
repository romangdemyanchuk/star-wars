import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch } from 'react-router'
import MainContainer from "./Main/MainContainer";
import LoginContainer from "./Login/loginFormContainer";

const App = () => {
  return (
      <Router>
        <Switch>
          <Route path="/" component={LoginContainer} exact />
            <Route path="/main" component={MainContainer} exact />
        </Switch>
      </Router>
  );
}

export default App;
