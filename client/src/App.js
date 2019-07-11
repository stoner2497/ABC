import React, { Component } from 'react'
import {Container,Row,Col} from 'reactstrap'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import Homepage from './components/homepage'
import Navbar from './components/common/Navbar'
import Home from './components/dashboardcontent/home'

import { setCurrentUser, logoutUser } from './Action/authAction';
import { clearCurrentProfile } from './Action/accountActions';
import PrivateRoute from './components/common/PrivateRoute';

import { Provider } from 'react-redux';
import store from './store';

if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
  
    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Clear current Profile
      store.dispatch(clearCurrentProfile());
      // Redirect to login
      window.location.href = '/';
    }
  }
export default class App extends Component {
   
    render() {
      return ( 
          <Provider store={store}>
              <Router>
                  
                  <Route exact path="/" component={Homepage} />
                    <Switch>
                        <PrivateRoute exact path="/admin" component={Home} />
                    </Switch>
              </Router>
          </Provider>
        )
    }
  }
  