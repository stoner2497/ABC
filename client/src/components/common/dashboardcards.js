import React, { Component } from 'react'
import { Row, Col, Card, CardTitle, CardSubtitle, CardText, CardBody, Button } from 'reactstrap'

export default class Dashboardcards extends Component {
    render() {
        return (
            <div>
                <Row className = "p-3">
        <Col md = {3} >
        <Card className = "universalcard">
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        </Col>
        <Col md = {3} >
        <Card className = "universalcard">
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        </Col>
        <Col md = {3} >
        <Card className = "universalcard">
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        </Col>
        <Col md = {3} >
        <Card className = "universalcard">
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        </Col>
      </Row>
      </div>
        )
    }
}
