import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, HashRouter } from "react-router-dom"; 
import Home from './containers/Home/Home';

function App() {
  return (
    <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/signIn" component={LoginPage} />
          <Route path="/signageEditor/:signageId" component={requireAuth(AddNewSignage)} /> */}
          {/* <Route path="/dashboard" component={requireAuth(DashboardPage)} />
          <Route path="/signageSummary" component={requireAuth(SignageSummaryPage)} />
          <Route path="/menueditor" component={requireAuth(SignageMenuEditorPage)} />         */}
        </Switch>
      </HashRouter>
  );
}

export default App;
