import React from "react";
import "./login-form.css"
import { Container, Row, Col } from "react-bootstrap";
import {Link} from 'react-router-dom';
//import {Redirect} from "react-router";
import { connect } from "react-redux";
import { LoginUser } from "../../REDUX/actions"
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};
class LoginForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            email: "",
            password: "",
          formErrors:{
            email:"",
            password:""
          } 
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        
    }
    

    handleOnSubmit=(event)=>{
        event.preventDefault();
        if (formValid(this.state)) {
          console.log(`
            --SUBMITTING--
            Email: ${this.state.email}
            Password: ${this.state.password}
          `);
          const user={
            email: this.state.email,
            password: this.state.password
          }
          //redux action handlercon
         
          this.props.LoginUser(user);
         
        }
    }
    
    handleOnChange=(e)=>{
      const { name, value } = e.target;
      let formErrors = { ...this.state.formErrors };
        switch(name){
          case "email":
            formErrors.email = emailRegex.test(value)
              ? ""
              : "invalid email address";
            break;
          case "password":
            formErrors.password =
              value.length < 6 ? "minimum 6 characaters required" : "";
            break;
            default:
              break;

        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    }
handleCheck=()=>{
  
}
    render() {
      const { formErrors } = this.state;
      console.log('bdwqvdjqwvjwvqwjvwqjvwqjcvwjcvqjc ',this.props.user);
      // if (this.props.user.messege==="success !") {
      //   return <Redirect to={{
      //     pathname:'/dashboard',
      //     state:{userData:this.props.user}
      //   }}/>;
      // }else{

      // }
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
                  {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
            )}

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
                  {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
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
const mapStateToProps = state => {
  return { user: state.user.user };
};
const mapDispacthToProps = dispatch => {
  return {
    LoginUser:  user=> dispatch(LoginUser(user)),
  };
};
export default connect( mapStateToProps,mapDispacthToProps)(LoginForm)
