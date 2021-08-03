import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CatogryPage from './catogry'
import './App.css';

function App() {
  return (
    <Router basename={window.__POWERED_BY_QIANKUN__ ? '/infoPage/' : '/'}>
      <Switch>
        <Route path="/:catogry/:id/" component={CatogryPage}></Route>
      </Switch>
    </Router>
  );
}
export default App;
