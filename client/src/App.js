/* import React, { Component } from 'react'
import {Container,Row,Col} from 'reactstrap'
import HomePage from './components/homepage'
import Home from './components/dashboardcontent/home'
import Task from './components/dashboardcontent/task'
import LoanDue from './components/dashboardcontent/loanDue'
import Faq from './components/dashboardcontent/faq'
import AddCustomer from './components/dashboardcontent/add'
import Navbar from './components/common/Navbar'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <Router>
      <React.Fragment>
        <Container>
          <Row>
            <Col md={12}>
              <h1>Welcome Semi-Admin</h1>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col md = {2}>
            
            <Navbar linkOne="Home" linkTwo="Task" linkThree="Loan Due" linkFour="FAQ" linkFive="Add Customer"/>
            </Col>
            <Col md = {10}>
              <Route exact path = "/" component = {HomePage} />
            <Route exact path="/home" component={Home} />  
            <Route exact path="/task" component={Task} />
            <Route exact path="/loanDue" component={LoanDue} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/add" component={AddCustomer} />
            </Col>
           
          </Row>
          <Row>
            <Col md = {12}>
              <hr />
            Footer
            </Col>
          </Row>
        </Container>
      </React.Fragment>
      </Router>
    )
  }
}
 */


import React, { Component } from 'react'
import {Container,Row,Col} from 'reactstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from './components/common/Navbar'
import './App.css'
import Customer from './components/employee/customer'
import Analysis from './components/employee/analysis'
import Task from './components/employee/task'
import Faq from './components/employee/faq'
import AddCustomer from './components/dashboardcontent/add'

 export default class App extends Component {
   render() {
     return (
<Router>
      <React.Fragment>
        <Container>
          <Row>
            <Col md={12}>
              <h1>Welcome Employee</h1>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col md = {2}>
            <Navbar/>
            
            </Col>
            <Col md = {10}>
            <Route exact path = "/customer" component = {Customer} />
            <Route exact path="/analysis" component={Analysis} />  
            <Route exact path="/task" component={Task} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/add" component={AddCustomer} /> 
            </Col>
           
          </Row>
          <Row>
            <Col md = {12}>
              <hr />
            Footer
            </Col>
          </Row>
        </Container>
      </React.Fragment>
      </Router>     )
   }
 }
 