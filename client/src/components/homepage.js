import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import {connect} from 'react-redux';
import {registerAdmin,login} from '../Action/authAction'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginmodal: false,
      semimodal: false,
      supermodal: false,
      Name:"",
      password:"",
      Branch:"",
      email:"",
      errors:{}
    };

    this.togglelogin = this.togglelogin.bind(this);
    this.togglesemi = this.togglesemi.bind(this);
    this.togglesuper = this.togglesuper.bind(this);
  }

  togglelogin() {
    this.setState(prevState => ({
      loginmodal: !prevState.loginmodal
    }));
  }

  togglesemi() {
    this.setState(prevState => ({
      semimodal: !prevState.semimodal
    }));
  }

  togglesuper() {
    this.setState(prevState => ({
      supermodal: !prevState.supermodal
    }));
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/admin')
    }
    if(nextProps.errors) {
      this.setState({
        errors:nextProps.errors
      })
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    const {Name ,email,Branch,password} = this.state
   const newUser = {
      Name ,
      email,
      Branch,
      password
    }
    
    this.props.registerAdmin(newUser,this.props.history)
  }
  onSubmitLogin = (e) => {
    e.preventDefault()
    const {Name ,email,Branch,password} = this.state
   const newUser = {
      Name ,
      email,
      Branch,
      password
    }
    
    this.props.login(newUser,this.props.history)
  }
  render() {
    return (
      <div>
        <Button color="primary" onClick={this.togglelogin}>Login</Button>
        <br /><br />
        <Button color="primary" onClick={this.togglesemi}>Sign up with Semi-Admin</Button>
        <br /><br />
        <Button color="primary" onClick={this.togglesuper}>Sign up with Super-Admin</Button>

        <Modal isOpen={this.state.loginmodal} toggle={this.togglelogin} className={this.props.className}>
          <ModalHeader toggle={this.togglelogin}>Login</ModalHeader>
          <ModalBody>
          <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" value={this.state.email} onChange={this.onChange} id="exampleEmail" placeholder="abc@g.com" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" value={this.state.password} onChange={this.onChange}  id="examplePassword" placeholder="********" />
        </FormGroup>
      </Form>
            
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onSubmitLogin}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.togglelogin}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.semimodal} toggle={this.togglesemi} className={this.props.className}>
          <ModalHeader toggle={this.togglesemi}>Semi Signup</ModalHeader>
          <ModalBody>
          <Form>
          <FormGroup>
          <Label for="exampleSelect">Branch</Label>
          <Input type="select" name="Branch" value={this.state.Branch} onChange={this.onChange} id="exampleSelect">
            <option value="none">None</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Surat">Surat</option>
            <option value="Banglore">Banglore</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="Name" value={this.state.Name} onChange={this.onChange} id="seminame" placeholder="abc" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" value={this.state.email} onChange={this.onChange} id="exampleEmail" placeholder="abc@g.com" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" value={this.state.password} onChange={this.onChange} id="examplePassword" placeholder="********" />
        </FormGroup>
      </Form>
            
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onSubmit}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.togglesemi}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.supermodal} toggle={this.togglesuper} className={this.props.className}>
          <ModalHeader>Super Signup</ModalHeader>
          <ModalBody>
          <Form>
          <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="supername" id="supername" placeholder="abc" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="abc@g.com" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="********" />
        </FormGroup>
      </Form>
            
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.onSubmit}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.togglesuper}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth:state.auth
})



export default connect(mapStateToProps,{registerAdmin,login})(HomePage);