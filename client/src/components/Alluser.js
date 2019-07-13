import React from 'react';
import { Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input ,Row,Col,Jumbotron,Table} from 'reactstrap';
import {connect} from 'react-redux'
import {getUserDetails} from '../Action/userAction'
 class AllCustomer extends React.Component {

    componentDidMount() {
        this.props.getUserDetails()
    }

  render() {
    // const {user} = this.props
    // let tableRow = Object.values(user).map(user => (
    //     <tr>
    //      <th scope="row">{user.Name}</th>
    //      </tr>
    // ))
    return (
     <div >
           <div style={{marginRight:'5%',boxShadow:' 3px 3px 10px grey',padding:'8px',marginBottom:'30px'}}>
             <h5>Customer List</h5>
            </div>
        <Row >
            <Col md="10">
                <Card className="newCardUser" >
                    <CardBody>
                    <Table className = "customerTable">
                      
                      <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Alternate Conatct</th>
                            <th>Email</th>
                            <th>Pan</th>
                            <th>Aadhar Card</th>
                            <th>Profession</th>
                            <th>Age</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Gender</th>
                            <th>Monthly Salary</th>
                            <th>Monthly Expense</th>
                            <th>Cibl</th>
                            <th>Martial Status</th>
                            <th>Residential Status</th>
                            <th>Designation</th>
                            <th>status</th>
                            <th>action</th>
                      </tr>
                      <tr>
                            <td>1</td>
                            <td>Name</td>
                            <td>Contact</td>
                            <td>Alternate Conatct</td>
                            <td>Email</td>
                            <td>Pan</td>
                            <td>Aadhar Card</td>
                            <td>Profession</td>
                            <td>Age</td>
                            <td>City</td>
                            <td>State</td>
                            <td>Gender</td>
                            <td>Montdly Salary</td>
                            <td>Montdly Expense</td>
                            <td>Cibl</td>
                            <td>Martial Status</td>
                            <td>Residential Status</td>
                            <td>Designation</td>
                            <td>status</td>
                            <td>action</td>
                      </tr>
                      <tr>
                            <td>2</td>
                            <td>Name</td>
                            <td>Contact</td>
                            <td>Alternate Conatct</td>
                            <td>Email</td>
                            <td>Pan</td>
                            <td>Aadhar Card</td>
                            <td>Profession</td>
                            <td>Age</td>
                            <td>City</td>
                            <td>State</td>
                            <td>Gender</td>
                            <td>Montdly Salary</td>
                            <td>Montdly Expense</td>
                            <td>Cibl</td>
                            <td>Martial Status</td>
                            <td>Residential Status</td>
                            <td>Designation</td>
                            <td>status</td>
                            <td>action</td>
                      </tr>
                    </Table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <br />
        </div>
    );
  }
}
const mapStateToProps = state => ({
    user:state.user
})
export default connect(mapStateToProps,{getUserDetails})(AllCustomer)