import React, { Component } from 'react'
import { Row, Col, Card, CardText, CardBody, CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem } from 'reactstrap';

export default class Analysis extends Component {
    render() {
        return (
            <React.Fragment>
                    <Row>
            <Col md = {8}>
            
                Customer List
                <ListGroup>
        <ListGroupItem>Customer 1</ListGroupItem>
        <ListGroupItem>Customer 2</ListGroupItem>
        <ListGroupItem>Customer 3</ListGroupItem>
        <ListGroupItem>Customer 4</ListGroupItem>
        <ListGroupItem>Customer 5</ListGroupItem>
      </ListGroup>
                
            </Col>
            <Col md = {4}>
                Report
                <br></br>
                <Card>
    
    <CardBody>
      <CardTitle>Card title</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
      <Button>Button</Button>
    </CardBody>
  </Card>
            </Col>
        </Row>
        <Row>
            <Col md = {12}>
                <hr />
            <table border = "1" width = "100%">
                <tr>
                    <th>
                        Sr. No.
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Designation
                    </th>
                    <th>
                        Contact
                    </th>
                </tr>
                <tr>
                    <td>
                        1
                    </td>
                        
                    <td>
                        2
                    </td>

                    <td>
                        3
                    </td>

                    <td>
                        4
                    </td>

                </tr>
                <tr>
                    <td>
                        1
                    </td>
                        
                    <td>
                        2
                    </td>

                    <td>
                        3
                    </td>

                    <td>
                        4
                    </td>

                </tr>                    
            </table>
            </Col>
        </Row>
        </React.Fragment>
        )
    }
}
