import React from 'react';
import { Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input ,Row,Col,Jumbotron,Table} from 'reactstrap';
import UserFormStep1 from './UserFormStep/UserFormStep1'
import UserFormStep2 from './UserFormStep/UserFormStep2'
export default class AddCustomer extends React.Component {
  render() {

    return (
     <div >
           <div style={{marginRight:'5%',boxShadow:' 3px 3px 10px grey',padding:'8px',marginBottom:'30px'}}>
             <h5>Customer List</h5>
            </div>
        <Row >
            <Col md="10">
                <Card className="newCardUser" >
                    <CardBody>
                    <Table>
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
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
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