import React from 'react';
import { Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input ,Row,Col,Jumbotron,Table} from 'reactstrap';
import {connect} from 'react-redux'
import {getUserDetails} from '../Action/userAction'
 class AllCustomer extends React.Component {

    componentDidMount() {
        this.props.getUserDetails()
    }

  render  ()  {
    const {user} = this.props
    let tableRow =  Object.values(user).map(user => (
      <tr>
      <td>{user.Name}</td>
   </tr>
    ))
        

  
    return (
     <div >
           <Jumbotron>
               <h3>Loans Due List</h3>
           </Jumbotron>
        <Row >
          <Col md="1"></Col>
            <Col md="10">
                <Card className="newCardUser" >
                    <CardBody>
                    <Table className = "customerTable">
      <thead>
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
       
      </thead> 
      <tbody>
       <tr>
                            <td>1</td>
                            <td>Sahil</td>
                            <td>7977038084</td>
                            <td>7977038084</td>
                            <td>SahilShah2497@gmail.com</td>
                            <td>CEGFFL5569</td>
                            <td>123456123456</td>
                            <td>SelfEmployeed</td>
                            <td>25</td>
                            <td>Mambai</td>
                            <td>Maharahstra</td>
                            <td>Male</td>
                            <td>50000</td>
                            <td>20000</td>
                            <td>750</td>
                            <td>Unmarried</td>
                            <td>Rent with Family</td>
                            <td>CEO</td>
                            <td>Pendinng</td>
                            <td>
                              <Button color="success">Accept</Button>
                            </td>
                      </tr>
                      <tr>
                            <td>2</td>
                            <td>Nirav</td>
                            <td>7977038084</td>
                            <td>7977038084</td>
                            <td>SahilShah2497@gmail.com</td>
                            <td>CEGFFL5569</td>
                            <td>123456123456</td>
                            <td>Salaried</td>
                            <td>27</td>
                            <td>Mambai</td>
                            <td>Maharahstra</td>
                            <td>Male</td>
                            <td>50000</td>
                            <td>20000</td>
                            <td>750</td>
                            <td>Unmarried</td>
                            <td>Rent with Family</td>
                            <td>CEO</td>
                            <td>Pendinng</td>
                            <td>
                              <Button color="success">Accept</Button>
                            </td>
                      </tr>
                      <tr>
                            <td>3</td>
                            <td>Nihar</td>
                            <td>7977038084</td>
                            <td>7977038084</td>
                            <td>Shah2497@gmail.com</td>
                            <td>CEGFFL5569</td>
                            <td>123456123456</td>
                            <td>SelfEmployeed</td>
                            <td>29</td>
                            <td>Mambai</td>
                            <td>Maharahstra</td>
                            <td>Male</td>
                            <td>50000</td>
                            <td>20000</td>
                            <td>750</td>
                            <td>Unmarried</td>
                            <td>Rent with Family</td>
                            <td>CEO</td>
                            <td>Pendinng</td>
                            <td>
                              <Button color="success">Accept</Button>
                            </td>
                      </tr>
                      <tr>
                            <td>5</td>
                            <td>Neha</td>
                            <td>7977038084</td>
                            <td>7977038084</td>
                            <td>neha@gmail.com</td>
                            <td>CEGFFL5569</td>
                            <td>123456123456</td>
                            <td>SelfEmployeed</td>
                            <td>25</td>
                            <td>Mambai</td>
                            <td>Maharahstra</td>
                            <td>Male</td>
                            <td>50000</td>
                            <td>20000</td>
                            <td>750</td>
                            <td>married</td>
                            <td>Rent with Family</td>
                            <td>CEO</td>
                            <td>Approved</td>
                            <td>
                              <Button color="success">Accept</Button>
                            </td>
                      </tr>
                      <tr>
                            <td>6</td>
                            <td>Dhwani</td>
                            <td>7977038084</td>
                            <td>7977038084</td>
                            <td>dhwani@gmail.com</td>
                            <td>CEGFFL5569</td>
                            <td>123456123456</td>
                            <td>SelfEmployeed</td>
                            <td>25</td>
                            <td>Mambai</td>
                            <td>Maharahstra</td>
                            <td>Female</td>
                            <td>50000</td>
                            <td>20000</td>
                            <td>750</td>
                            <td>Unmarried</td>
                            <td>Rent with Family</td>
                            <td>CEO</td>
                            <td>Pendinng</td>
                            <td>
                              <Button color="success">Accept</Button>
                            </td>
                      </tr>
      </tbody>
      
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