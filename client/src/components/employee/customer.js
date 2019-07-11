import React, { Component } from 'react'
import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, ListGroup, ListGroupItem } from 'reactstrap';
import Chart from "react-google-charts";

const data = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"] // CSS-style declaration
  ];

export default class Customer extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                <Col md = {12}>
                    Customer List
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col md = {8}>
                    
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
                    <Card>
        
        <CardBody>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Chart
          chartType="ColumnChart"
          width="100%"
          height="300px"
          data={data}
        />
          <Button>Button</Button>
        </CardBody>
      </Card>    
                </Col>
            </Row>
            </React.Fragment>
        )
    }
}
