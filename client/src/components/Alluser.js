import React from 'react';
import { Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input ,Row,Col,Jumbotron,Table,Badge} from 'reactstrap';
import {connect} from 'react-redux'
import {getUserDetails} from '../Action/userAction'
 class AllCustomer extends React.Component {

    componentDidMount() {
        this.props.getUserDetails()
    }

  render  ()  {
    const { users } = this.props.user
    let tableRow =  users.map(user => (
      <tr>
      <td>{user.Name}</td>
   </tr>
    ))
        

  
    return (
     <div >
           <Jumbotron>
             <h3>
               All Users
             </h3>
           </Jumbotron>
               <Button style={{marginLeft:'2%'}} >New Users Online : 0</Button>
                {"  "}
               <Button  className="btn-sucess">New Users Offline : 2</Button>
             <br />
             <br />
        <Row >
          <Col md="1"></Col>
            <Col md="10">
                <Card className="newCardUser" >
                    <CardBody>
                    <Table className = "customerTable">
      <thead>
        {console.log()}
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
      {tableRow}
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