import React, { Component } from 'react'
import {Row,Col} from 'reactstrap'
import { Card, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Chart } from "react-charts";
const lineChart = (
    // A react-chart hyper-responsively and continuusly fills the available
    // space of its parent element automatically
    <div
      style={{
        width: "500px",
        height: "300px"
      }}
    >
      <Chart
        data={[
          {
            label: "Series 1",
            data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
          },
          {
            label: "Series 2",
            data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
          }
        ]}
        axes={[
          { primary: true, type: "linear", position: "bottom" },
          { type: "linear", position: "left" }
        ]}
      />
    </div>
  )

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                <Col md = {3}>
                <Card>
        
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>    
                
                </Col>
                <Col md = {3}>
                <Card>
        
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
                
                </Col>
                <Col md = {3}>
                <Card>
        
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
                
                </Col>
                <Col md = {3}>
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
            <hr />
            <Row>
                <Col md = {8}>
                
                    Loan Due Analysis
                    {lineChart}
                    
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
