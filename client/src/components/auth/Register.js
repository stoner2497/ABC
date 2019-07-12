import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { Form, FormGroup, Label, Input ,Container , Row ,Col,Card,CardBody,CardTitle} from 'reactstrap';
import {registerAdmin} from '../../Action/authAction'
import Button from '../common/Button'
 class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name:'',
            email:'',
            password:'',
            error:{}
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push('/dashboard');
        }
      }
    

    componentWillReceiveProps(nextProps) {
       
        if (nextProps.errors) {
        this.setState({ errors: nextProps.errors });
        }
    }

    onHandleChange  (e)  {
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit (e)  {
        e.preventDefault()
        const {Name,email,password} = this.state;
        const adminData = {
            Name,
            email,
            password
        }
        console.log(adminData)
        this.props.registerAdmin(adminData,this.props.history)
    }
    render() {
        const {Name,email,password} = this.state
        return (
            <React.Fragment>
                <Container >
                    <Row style={{marginTop:"15%"}}>
                        <Col md="3"></Col>
                        <Col md="6">
                            <Card className="loginCard">
                                <CardBody>
                                    <CardTitle className="text-center">Register ADMIN</CardTitle>
                                <Form  onSubmit={this.onSubmit}>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                                    <Input type="text" name="Name" value={Name} onChange={this.onHandleChange} id="exampleEmail" placeholder="Your Good Name" />
                                    </FormGroup>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                                    <Input type="email" name="email" value={email} onChange={this.onHandleChange} id="exampleEmail" placeholder="something@idk.cool" />
                                    </FormGroup>
                                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                                    <Input type="password" name="password" value={password} onChange={this.onHandleChange} id="examplePassword" placeholder="don't tell!" />
                                    </FormGroup>
                                    <FormGroup>
                                    <small>Already Register <br />  <Link to="/">Login Here </Link></small> 
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="submit" className="btn btn-primary" value="Register" />
                                    </FormGroup>
                                </Form>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="3"></Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors:state.errors
  });
  export default    connect(mapStateToProps,{registerAdmin}) (Register)