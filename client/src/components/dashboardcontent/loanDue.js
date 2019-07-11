import React, { Component } from 'react'
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem } from 'reactstrap';

export default class LoanDue extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                <Col md = {12}>
                    Loan Due
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col md = {8}>
                    Loan Due Analysis
                    <ListGroup>
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Morbi leo risus</ListGroupItem>
        <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
                </Col>
                <Col md = {4}>
                    Report
                    <Card>
        
        <CardBody>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>    
                </Col>
            </Row>
            </React.Fragment>
             
        )
    }
}
