import React, { Component } from 'react'
import {CustomInput, Row,Col, Button, Form, FormGroup, Label, Input, FormText ,Card,CardBody} from 'reactstrap';

export default class UserFormStep2 extends Component {
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit()
    }
    back = (e) => {
       e.preventDefault();
       this.props.previous()
   }
    render() {
        const {values , onHandleChange} = this.props
        return (
            <div>
                <Form>
                    <FormGroup>
                      <Label for="cibl">Monthly Income</Label>
                      <Input type="number" name="monthlyIncome" value={values.monthlyIncome} onChange={onHandleChange} placeholder="enter your Monthly Income " />    
                    </FormGroup>
                    
                    <FormGroup>
                      <Label for="profession">Monthly Expense</Label>
                      <Input type="number" name="monthlyExpense" value={values.monthlyExpense} onChange={onHandleChange} placeholder="enter your Monthly Expense " />
                    </FormGroup>
                    <FormGroup>
                      <Label for="age">LoanType</Label>
                      <CustomInput type="select" id="hello worl" name="loanType" value={values.loanType} onChange={onHandleChange} placeholder="enter your Age " >
                        <option> None </option>
                        <option value="Personal"> Personal </option>
                        <option value="Bussiness">Bussiness</option>
                      </CustomInput>
                    </FormGroup>
                    <FormGroup>
                      <Label for="age">Residential Status</Label>
                      <CustomInput type="select" name="residentialStatus" value={values.residentialStatus} onChange={onHandleChange} placeholder="enter your Age " >
                        <option> None </option>
                        <option value="Rental with Friends/relatives"> Rental with Friends/relatives </option>
                        <option value="Rental With Family">Rental With Family</option>
                        <option value="Rental Stay Alone">Reantal Stay Alone</option>
                        <option value="Paying Guest">Paying Guest</option>
                        <option value="company/govt provided">Company/Govt provided</option>
                      </CustomInput>
                    </FormGroup>
                    <FormGroup>
                      <Label for="age">Maritial Status</Label>
                      <CustomInput type="select" name="maritialStatus" value={values.maritialStatus} onChange={onHandleChange} placeholder="enter your Age " >
                        <option> None </option>
                        <option value="Married"> Married </option>
                        <option value="Unmarried">Unmarried</option>
                        <option value="Divorce">Divorce</option>
                      </CustomInput>
                    </FormGroup>
                    <FormGroup>
                        <Label for="Loan Amount">Loan Amount</Label>
                        <Input type="number" name="loanAmt" value={values.loanAmt} onChange={onHandleChange} placeholder="enter loan amount" />
                    </FormGroup> 
                    <Button onClick={this.back}>Back</Button> {" "}<Button onClick={this.onSubmit}>Submit</Button>
                </Form>
            </div>
        )
    }
}
