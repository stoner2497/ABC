import React, { Component } from 'react'
import {CustomInput, Row,Col, Button, Form, FormGroup, Label, Input, FormText ,Card,CardBody} from 'reactstrap';

export default class UserFormStep2 extends Component {
    back = (e) => {
        e.preventDefault();
        this.props.previous()
    }
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
                      <Label for="cibl">Cibl</Label>
                      <Input type="number" name="cibl" value={values.cibl} onChange={onHandleChange} placeholder="enter your cibl " />    
                    </FormGroup>
                    
                    <FormGroup>
                      <Label for="profession">Profession</Label>
                      <Input type="text" value={values.profession} name="profession" onChange={onHandleChange} placeholder="enter your Profession " />
                    </FormGroup>

                    <FormGroup>
                      <Label for="age">Age</Label>
                      <Input type="number" value={values.age} name="age" onChange={onHandleChange} placeholder="enter your Age " />
                    </FormGroup>
                    <FormGroup>
                      <CustomInput type="select" value={values.Branch} name="Branch" id="selectcity" onChange={onHandleChange} placeholder="enter your cibl " >
                        <option>None</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Surat">Surat</option>
                        <option value="Banglore">Banglore</option>
                    </CustomInput>
                    </FormGroup>
                    <Button onClick={this.continue}>Next</Button> {" "}<Button onClick={this.back}>Previous</Button>
                </Form>
            </div>
        )
    }
}
