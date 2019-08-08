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
            <CardTitle ><h2><b>TOTAL AMOUNT SANCTION</b></h2></CardTitle>
              <CardText style={{color:'#FDC4503'}}><h3>5,00,00,000 INR</h3></CardText>
          </CardBody>
        </Card>
        </Col>
        <Col md = {3} >
        <Card className = "universalcard">
          <CardBody>
            <CardTitle><h2><b>TOTAL AMOUNT RECOVERD</b></h2></CardTitle>
            <CardText  style={{color:'#FDC4503'}}><h3>50,00,000 INR</h3></CardText>
          </CardBody>
        </Card>
        </Col>
        <Col md = {3} >
        <Card className = "universalcard">
          <CardBody>
            <CardTitle><h2><b>TOTAL AMOUNT TO BE RECOVERD </b></h2></CardTitle>
            <CardText><h3>4,50,00,000 INR</h3></CardText>
            
          </CardBody>
        </Card>
        </Col>
        <Col md = {3} >
        <Card className = "universalcard">
          <CardBody>
            <CardTitle><h2><b>LOANS DUE</b></h2></CardTitle>
            
            <CardText><h3>6</h3></CardText>
            
          </CardBody>
        </Card>
        </Col>
      </Row>
      </div>
        )
    }
}
