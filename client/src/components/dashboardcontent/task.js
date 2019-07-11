import React, { Component } from 'react'
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
export default class Task extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                <Col md = {12}>
                    Your Task
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col md = {8}>
                    All Task Analysis
                    <br/>
                    <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
      <br/>
      <Card>
        
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>        
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
