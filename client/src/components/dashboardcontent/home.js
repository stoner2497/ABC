import React, { Component } from 'react'
import { Row, Col, Card, CardTitle, CardSubtitle, CardText, CardBody, Button ,Jumbotron } from 'reactstrap'
import Graph from '../common/graph'
import Piechart from '../common/piechart';
import Piechart2 from '../common/piechart2';
import Piechart3 from '../common/piechart3';
import LineChart from '../common/lineChart';
import Dashboardcards from '../common/dashboardcards';


export default class App extends Component {
  render() {
    return (
      <div className = "mainpage">
        <h1>DashBoard</h1>
      <hr />
      <Row className = "p-4">
        <Col md = {6}>
        <Card className = "universalcard">
            <CardBody>
            <Graph />
            </CardBody>
          </Card>
        </Col>
        <Col md = {6}>
        <Card className = "universalcard">
            <CardBody>
              <LineChart />
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
              <CardText><h1>Total Users:  6</h1></CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className = "p-4">
        <Col md = {4}>
          <Card className = "universalcard">
            <CardBody>
            <Piechart />
            </CardBody>
          </Card>
        </Col>
        <Col md = {4}>
          <Card className = "universalcard">
            <CardBody>
            <Piechart2 />
            </CardBody>
          </Card>

        </Col>
        <Col md = {4}>
          <Card className = "universalcard">
            <CardBody>
            <Piechart3 />
            </CardBody>
          </Card>

        </Col>
      </Row>
      </div>

    )
  }
}