import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  } from 'reactstrap';


  
export default class UpperBar extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div style={{paddingBottom:'2%' }}>
          <Navbar color="danger"  expand="md">
            <NavbarBrand href="/" style={{color:"white"}}><h4>Aditya Birla Capital</h4></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }