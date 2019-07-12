import React, { Component } from 'react'
import { Row, Col, Card, CardTitle, CardSubtitle, CardText, CardBody, Button } from 'reactstrap'
import Graph from '../common/graph'
import Piechart from '../common/piechart';
import Dashboardcards from '../common/dashboardcards';


export default class App extends Component {
  render() {
    return (
      <div className = "mainpage">
      
      <Row className = "p-4">
        <Col md = {9}>
        <Card className = "universalcard">
            <CardBody>
            <Graph />
            </CardBody>
          </Card>
        </Col>
        <Col md = {3}>
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
      <Row className = "p-4">
        <Dashboardcards />
      </Row>
      <Row className = "p-4">
        <Col md = {12}>
          <Card className = "universalcard">
            <CardBody>
              <CardText><h1>Total Users:</h1></CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className = "p-4">
        <Col md = {6}>
          <Card className = "universalcard">
            <CardBody>
            <Piechart />
            </CardBody>
          </Card>
        </Col>
        <Col md = {6}>
          <Card className = "universalcard">
            <CardBody>
            <Piechart />
            </CardBody>
          </Card>

        </Col>
      </Row>
      </div>

    )
  }
}