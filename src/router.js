import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import  MLayout from './components/layout'
import AAA from './routes/aaa'
import  BBB from './routes/bbb'
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      {/*<Switch>
        <Route path="/" exact component={IndexPage} />
      </Switch>*/}
      <MLayout>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/a" exact component={AAA}></Route>
          <Route path="/b" exact component={BBB}></Route>
        </Switch>
      </MLayout>
    </Router>
  );
}

export default RouterConfig;
