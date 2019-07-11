import React from 'react';
import { Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class AddCustomer extends React.Component {
  render() {
    return (
      <Card>
        
        <CardBody>
          <CardTitle>Add New Customer Form</CardTitle>
          <Form>
        <FormGroup>
          <Label for="name">Full Name</Label>
          <Input type="text" name="fullname" id="fullname" placeholder="Nirav Panchal" />
        </FormGroup>  
        <FormGroup>
          <Label for="contact">Contact</Label>
          <Input type="number" name="contact" id="contact" placeholder="9999999999" />
        </FormGroup>  
        <FormGroup>
          <Label for="alternate">Alternate Contact</Label>
          <Input type="number" name="alternate" id="alternate" placeholder="9999999999" />
        </FormGroup>  
        
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="PAN">PAN</Label>
          <Input type="text" name="pancard" id="pancard" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="Aadhar">Aadhar Card Number</Label>
          <Input type="text" name="aadhar" id="aadhar" placeholder="" />
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">Select City</Label>
          <Input type="select" name="selectcity" id="selectcity">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">Select State</Label>
          <Input type="select" name="selectcity" id="selectcity">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        
        <FormGroup>
          <Label for="Cibil">Aadhar Card Number</Label>
          <Input type="number" name="cibil" id="cibil" placeholder="" />
        </FormGroup>
        
        <FormGroup tag="fieldset">
          <legend>Gender</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Male
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Female
            </Label>
          </FormGroup>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
        </CardBody>
      </Card>    

      
    );
  }
}