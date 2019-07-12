import React, { Component } from 'react'
import { Nav, NavItem} from 'reactstrap';
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';

import { logoutUser } from '../../Action/authAction';
import { clearCurrentProfile } from '../../Action/accountActions';


class Navbar extends Component {
  
  onLogoutClick(e) {

    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
        <Nav vertical  className="navbars">
      <NavItem>
       <Link className="nav-link" to="/customer"><i style={{fontSize:'30px',color:'Black'}} className="fas fa-chart-line"></i></Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/admin/users"><i style={{fontSize:'30px',color:'Black'}} className="fas fa-user-clock"></i></Link>
      </NavItem>
      <NavItem>
        <Link className= "nav-link" to="/admin/Addusers"><i  style={{fontSize:'30px',color:'Black'}}  class="fas fa-user-plus"></i></Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/faq">FAQ</Link>
      </NavItem>
      <NavItem>
      <i className="fas fa-sign-out-alt nav-link" style={{fontSize:'30px'}} onClick={this.onLogoutClick.bind(this)}></i>
      </NavItem>
    </Nav>

    )
  
        return (
          <React.Fragment>
              {isAuthenticated ? authLinks : null}
          </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser, clearCurrentProfile })(
  Navbar
);
