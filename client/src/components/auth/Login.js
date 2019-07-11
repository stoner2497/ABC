import React, { Component } from 'react'
import { Form, FormGroup, Label, Input,Alert } from 'reactstrap';
import Button from '../common/Button'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }

    onHandleChange  (e)  {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit ()  {
        const {email,password} = this.state;
        console.log(email,password)
        return (
            <Alert color="primary">
                {email} {" "} {password}
            </Alert>
        )
    }
    render() {
        const {email,password} = this.state
        return (
            <React.Fragment>
                <h3>{email}</h3>
            <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="exampleEmail" className="mr-sm-2">Email</Label>
              <Input type="email" name="email" value={email} onChange={this.onHandleChange} id="exampleEmail" placeholder="something@idk.cool" />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="examplePassword" className="mr-sm-2">Password</Label>
              <Input type="password" name="password" value={password} onChange={this.onHandleChange} id="examplePassword" placeholder="don't tell!" />
            </FormGroup>
            <Button onClick={this.onSubmit}><small>Submit</small></Button>
          </Form>
          </React.Fragment>
        )
    }
}
