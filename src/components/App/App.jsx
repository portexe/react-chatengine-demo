import { Switch, Route } from 'react-router-dom';
import { Login, Signup, Chat } from 'components';

export const App = () => {
  return (
    <div className='app'>
      <Switch>
        <Route path="/" exact component={Chat} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
};
