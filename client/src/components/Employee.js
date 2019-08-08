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
               <h3>Employee List</h3>
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
            <th>Email</th>
            <th>Designation</th>
      </tr>
       
      </thead> 
      <tbody>
       <tr>
        <td>1</td>
        <td>Sahil</td>
        <td>helloworld@gmail.com</td>
        <td>Manager</td>
                            
       </tr>       
       <tr>
        <td>2</td>
        <td>Nirav</td>
        <td>Nirav@gmail.com</td>
        <td>Employee</td>
                            
       </tr>       

       <tr>
        <td>3</td>
        <td>Nihar</td>
        <td>Nihar@gmail.com</td>
        <td>CDO</td>
                            
       </tr>       
       <tr>
        <td>4</td>
        <td>Dhwani</td>
        <td>Dhawani@gmail.com</td>
        <td>Branch Manager</td>
                            
       </tr>       
       <tr>
        <td>5</td>
        <td>Nihal</td>
        <td>Nihal@gmail.com</td>
        <td>Employee</td>
                            
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