import React from "react";
import "./login-form.css"
import { Container, Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom';
class LoginForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            email: "",
            password: ""
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.Email_validator=this.Email_validator.bind(this);
        // this.Password_validator=this.Password_validator.bind(this);
    }
    Email_validator=()=>{
        console.log('inside email validator');
        let value=this.state.email;
        let mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
        
        console.log('aloo ',mailFormat.test(value.toLowerCase()))
        
        return mailFormat.test(value.toLowerCase());

    }
    // Password_validator=()=>{
    //     console.log('inside password validator'); 
    //     return true;
    // }

    handleOnSubmit=(event)=>{
        let errorMessege="";
        console.log('inside submit ');
        event.preventDefault();
        console.log('email id is ',this.state.email,' password is ',this.state.password);
        //console.log(event);
        console.log('value of email validator ',this.Email_validator());
        if(this.Email_validator()===false){
            console.log('email is invalid');
            errorMessege='invalid emailId';
        }
        else if(this.Email_validator()=== true){
            //dispatch the loginEvent to backend API
            alert('calling backend api');
        }
    }
    
    handleOnChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
        // console.log(event.target.value);
        // console.log(this.state.email);
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                            A demo column
                </Col>
                        <Col>
                        <form className="form-signin" onSubmit={this.handleOnSubmit}>
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      name="email"
                      className="form-control"
                      placeholder="UserName"
                      onChange={this.handleOnChange}
                      required
                      autoFocus
                    />
                    <label htmlFor="inputEmail">Email Id</label>
                   
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      name="password"
                      onChange={this.handleOnChange}
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>

                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember password
                    </label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Login
                  </button>
                  <hr className="my-4" />
                  <Link to ="/registerUser">New User Register</Link>
                </form>

                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
export default LoginForm
