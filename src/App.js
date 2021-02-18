import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Switch } from 'react-router'
import Login from "./Login";
import Main from "./Main";
import Detail from "./ItemDetail";

const App = () => {
  return (
      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
            <Route path="/main" component={Main} exact />
            <Route path="/main/:id" component={Detail}/>
        </Switch>
      </Router>
  );
}

export default App;
