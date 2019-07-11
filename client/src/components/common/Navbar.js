import React, { Component } from 'react'
import { Nav, NavItem} from 'reactstrap';
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (

      <div>
        <p>Employee Navbar</p>
        <Nav vertical>
          <NavItem>
           <Link className="nav-link" to="/customer">Customers</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/analysis">Analysis</Link>
          </NavItem>
          <NavItem>
            <Link className= "nav-link" to="/task">Task</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/faq">FAQ</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to="/add">Add New Customer</Link>
          </NavItem>
        </Nav>
        
      </div>
/*
<div>
<p>Semi-Admin Navbar</p>
<Nav vertical>
  <NavItem>
   <Link className="nav-link" to="/home">{this.props.linkOne}</Link>
  </NavItem>
  <NavItem>
    <Link className="nav-link" to="/task">{this.props.linkTwo}</Link>
  </NavItem>
  <NavItem>
    <Link className= "nav-link" to="/loanDue">{this.props.linkThree}</Link>
  </NavItem>
  <NavItem>
    <Link className="nav-link" to="/faq">{this.props.linkFour}</Link>
  </NavItem>
  <NavItem>
    <Link className="nav-link" to="/add">{this.props.linkFive}</Link>
  </NavItem>
</Nav>

</div>
 */
        )
    }
}
