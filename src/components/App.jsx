import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <h1>Hello!</h1>
      <Switch>
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
