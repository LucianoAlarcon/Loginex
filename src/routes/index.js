import { Switch, Route } from 'react-router-dom';
import Profile from '../Components/Profile/Index';
import Home from '../Components/Home';
import Login from '../Components/Login'

const Routes = () => {
  return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
      </Switch>
  );
};

export default Routes;