import React from 'react';
import login from './container/login/login'
import Admin from './container/admin/admin'
import {Route,Switch,Redirect} from 'react-router-dom'
  
function App() {
  return (
    <Switch>               
      <Route path="/login" component={login}/>
      <Route path="/admin" component={Admin}/>
      <Redirect to="login"/>
    </Switch>
  );
}

export default App;
