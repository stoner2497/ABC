import React, { Component } from 'react'
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import {Container ,Row,Col} from'reactstrap'
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import Home from './components/dashboardcontent/home'
import Login from './components/auth/Login'
import Navbar from './components/common/Navbar'
import Register from './components/auth/Register'
import User from './components/Alluser';
import UpperBar from './components/common/UpperBar'
import Adduser from './components/AddUser'
import "./App.css"

import { setCurrentUser, logoutUser } from './Action/authAction';
import { clearCurrentProfile } from './Action/accountActions';
import PrivateRoute from './components/common/PrivateRoute';

import { Provider } from 'react-redux';
import store from './store';

if (localStorage.jwttoken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwttoken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwttoken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
  
    // // Check for expired token
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
                <UpperBar />
                <Row >
                  <Col md="1">
                    <Navbar />  
                  </Col> 
                  <Col md="11">
                 
                    <Switch>
                        <PrivateRoute exact path="/admin" component={Home} />
                        <PrivateRoute exact path="/admin/users" component={User} />
                        <PrivateRoute exact path="/admin/Addusers" component={Adduser} />
                        {/* <PrivateRoute exact path="/admin/Banks" component={Banks} />
                        <PrivateRoute exact path="/admin/LoansDue" component={loansDue} />
                        <PrivateRoute exact path="/admin/Task" component={Task} />
                        <PrivateRoute exact path="/admin/acceptedLoan" component={acceptedLoan} /> */}
                    </Switch>
                  </Col> 
                </Row> 
                <Route exact path="/" component={Login} />
                  <Route exact path="/register" component={Register} />
              </Router>
          </Provider>
        )
    }
  }
  