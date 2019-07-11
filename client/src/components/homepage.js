import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginmodal: false,
      semimodal: false,
      supermodal: false
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
          <Input type="email" name="email" id="exampleEmail" placeholder="abc@g.com" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="********" />
        </FormGroup>
      </Form>
            
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.togglelogin}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.togglelogin}>Cancel</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.semimodal} toggle={this.togglesemi} className={this.props.className}>
          <ModalHeader toggle={this.togglesemi}>Semi Signup</ModalHeader>
          <ModalBody>
          <Form>
          <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="seminame" id="seminame" placeholder="abc" />
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
            <Button color="primary" onClick={this.togglesemi}>Submit</Button>{' '}
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
            <Button color="primary" onClick={this.togglesuper}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.togglesuper}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default HomePage;