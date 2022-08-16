import './App.css';
import PrivateRoute from './components/HOC/PrivateRoute';
import Navbar from './components/Navbar';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isUserLoggedIn } from './redux/actions/auth.actions';
import Products from './containers/Products';
import Orders from './containers/Orders';
import Category from './containers/Category';


function App() {

  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn())
    }
  }, [dispatch, auth.authenticate])

  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <PrivateRoute path='/category' component={Category} />
          <PrivateRoute path='/products' component={Products} />
          <PrivateRoute path='/orders' component={Orders} />

          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
