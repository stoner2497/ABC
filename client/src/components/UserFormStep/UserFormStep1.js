import React, { Component } from 'react'
import {CustomInput, Row,Col, Button, Form, FormGroup, Label, Input, FormText ,Card,CardBody} from 'reactstrap';

export default class UserFormStep1 extends Component {
   continue = (e) => {
       e.preventDefault();
       this.props.next()
   }
    render() {
        const {values , onHandleChange} = this.props
        return (
            <div>
                       <Form>
        <FormGroup>
          <Label for="name">Full Name</Label>
          <Input type="text" name="Name" value={values.Name} onChange={onHandleChange} id="fullname" placeholder="Nirav Panchal" />
        </FormGroup>  
        <FormGroup>
          <Label for="contact">Contact</Label>
          <Input type="number" name="contact" value={values.contact} onChange={onHandleChange} id="contact" placeholder="9999999999" />
        </FormGroup>  
        <FormGroup>
          <Label for="alternate">Alternate Contact</Label>
          <Input type="number" name="alternateNumber" value={values.alternateNumber} onChange={onHandleChange}  id="alternate" placeholder="9999999999" />
        </FormGroup>  
        
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input type="email" name="email" value={values.email} onChange={onHandleChange} id="exampleEmail" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="PAN">PAN</Label>
          <Input type="text" name="pan" value={values.pan} onChange={onHandleChange} id="pancard" placeholder="" />
        </FormGroup>
        <FormGroup>
          <Label for="Aadhar">Aadhar Card Number</Label>
          <Input type="text" name="Aadhar" value={values.Aadhar} onChange={onHandleChange} id="aadhar" placeholder="" />
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">Select City</Label>
          <CustomInput  type="select" name="city" value={values.city} id="selectcity" onChange={onHandleChange}>
            <option>None</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Surat">Surat</option>
            <option value="Banglore">Banglore</option>
            <option value="Jaipur">Jaipur</option>
          </CustomInput>
        </FormGroup>        
        <FormGroup >
        <Label for="exampleSelect">Gender</Label>
          <CustomInput type="select" name="gender" value={values.gender} onChange={onHandleChange} id="selectcity">
            <option>None</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </CustomInput>
         </FormGroup>
        <Button onClick={this.continue}>Next</Button>
      </Form>
            </div>
        )
    }
}
