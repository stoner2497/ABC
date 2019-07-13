import React, { Component } from 'react'
import UserFormStep1 from './UserFormStep/UserFormStep1'
import UserFormStep2 from './UserFormStep/UserFormStep2'
import UserFormStep3 from './UserFormStep/UserFormStep3'

import {Row,Col,Card ,CardBody} from 'reactstrap'
export default class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step:1,
            Name:'',
            contact:'',
            alternateNumber:'',
            email:'',
            pan:'',
            Aadhar:'',
            city:'',
            state:'',
            cibl:'',
            gender:'',
            profession:'',
            age:"",
            Branch:'',
            monthlyIncome:'',
            monthlyExpense:'',
            loanType:'',
            loanAmt:'',
            maritialStatus:'',
            residentialStatus:'',
            Designation:''
        }
        this.onRender = this.onRender.bind(this)
        this.onHandleChange = this.onHandleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    nextStep = (e) => {
        const {step} = this.state;
        this.setState({
            step:step + 1
        })
    }
    prevStep = (e) => {
        const {step} = this.state;
        this.setState({
            step:step - 1
        })
        console.log(step)
    }
    onHandleChange  (e)  {
        e.preventDefault()
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault()
        const {Name,contact,alternateNumber,email,pan,Aadhar,cibl,city,state,gender,profession,age,Branch,monthlyIncome,monthlyExpense,LoanType,loanAmt,maritialStatus,residentialStatus,Designation} = this.state
        const newUser = {
            Name,contact,alternateNumber,email,pan,Aadhar,cibl,city,state,gender,profession,age,Branch,monthlyIncome,monthlyExpense,LoanType,loanAmt,maritialStatus,residentialStatus,Designation
        } 
        console.log(newUser)
    }
    onRender()  {
        const {step} = this.state;
        const {Name,contact,alternateNumber,email,pan,Aadhar,cibl,city,state,gender,profession,age,Branch,monthlyIncome,monthlyExpense,LoanType,loanAmt,maritialStatus,residentialStatus,Designation} = this.state
        const values = {Name,contact,alternateNumber,email,pan,Aadhar,cibl,city,state,gender,profession,age,Branch,monthlyIncome,monthlyExpense,LoanType,loanAmt,maritialStatus,residentialStatus,Designation}
        switch(step) {
            case 1:
                return (
                   <UserFormStep1 
                   values={values}
                   next={this.nextStep}
                   onHandleChange={this.onHandleChange } />
                )
            case 2:
                return (
                    <UserFormStep2
                     values={values}
                     next={this.nextStep}
                     previous={this.prevStep}
                     onHandleChange={this.onHandleChange} />
                )
            case 3:
                return (
                    <UserFormStep3 
                        values={values}
                        onSubmit={this.onSubmit}
                        previous={this.prevStep}
                        onHandleChange={this.onHandleChange}
                        />
                )
        }
    }
    render() {
        return (
            <div>
                   <Row>
                       <Col md="3"></Col>
                       <Col md="6">
                           <Card>
                               <CardBody>
                                   {this.onRender()}
                               </CardBody>
                           </Card>
                       </Col>
                       <Col md="3"></Col>
                   </Row>
            </div>
        )
    }
}
