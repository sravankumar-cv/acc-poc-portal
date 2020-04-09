import { connect } from "react-redux";
import {RegisterUser} from "../../REDUX/actions"
import React from 'react';
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
const phoneNumberRegex=RegExp(
  /^[0][1-9]\d{9}$|^[1-9]\d{9}$/
);
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = true);
  });

  return valid;
};
class registerUser extends React.Component{
  constructor(props){
    super();
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      phoneNumber:null,
      image:null,
      formErrors: {
        firstName: "",
        lastName: "",
        phoneNumber:"",
        email: "",
        password: "",
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        PhoneNumber:${this.state.phoneNumber}
        Email: ${this.state.email}
        Password: ${this.state.password}
      `);
      //redux action handler
      const User={
        name:this.state.firstName+this.state.lastName,
        password:this.state.password,
        email:this.state.email,
        phone_number:this.state.phoneNumber,
        files:this.state.image,
        category:"",
        subcategory:"",
        role:"U"
      }
      console.log(User);
      this.props.RegisterUser(User)
        
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };
  handleFileChange=(event)=>{
    console.log(event.target.files[0]);
    this.setState({image:event.target.files[0]});
  }
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    // console.log('event is  ',e.target);
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      case "phoneNumber":
        formErrors.phoneNumber = phoneNumberRegex.test(parseInt(value))
        ? ""
        : "Enter 10 digit mobile number";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  }
  render() {
    const { formErrors } = this.state;
    return (
      <div className="wrapper">
      <div className="form-wrapper">
        <h1>Create Account For Users</h1>
        <form onSubmit={this.handleSubmit} noValidate  encType="multipart/form-data"> 
          <div className="firstName">
            <label htmlFor="firstName">First Name</label>
            <input
              className={formErrors.firstName.length > 0 ? "error" : null}
              placeholder="First Name"
              type="text"
              name="firstName"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.firstName.length > 0 && (
              <span className="errorMessage">{formErrors.firstName}</span>
            )}
          </div>
          <div className="lastName">
            <label htmlFor="lastName">Last Name</label>
            <input
              className={formErrors.lastName.length > 0 ? "error" : null}
              placeholder="Last Name"
              type="text"
              name="lastName"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.lastName.length > 0 && (
              <span className="errorMessage">{formErrors.lastName}</span>
            )}
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              className={formErrors.email.length > 0 ? "error" : null}
              placeholder="Email"
              type="email"
              name="email"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
            )}
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              className={formErrors.password.length > 0 ? "error" : null}
              placeholder="Password"
              type="password"
              name="password"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.password.length > 0 && (
              <span className="errorMessage">{formErrors.password}</span>
            )}
          </div>
          <div className="phoneNumber">
            <label htmlFor="phoneNumber">Mobile Number</label>
            <input
              className={formErrors.phoneNumber.length > 0 ? "error" : null}
              placeholder="Mobile Number"
              type="text"
              name="phoneNumber"
              noValidate
              onChange={this.handleChange}
            />
            {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.phoneNumber}</span>
            )}
          </div>
          <div className="myfile">
            <input type="file"
            multiple
            name="filess"
            id="image"
            noValidate
            onChange={this.handleFileChange}
            />
          </div>
          <div className="createAccount">
            <button type="submit">Create Account</button>
          </div>
        </form>
      </div>
    </div>
    );
  };
};
const mapDispacthToProps = dispatch => {
  return {
    RegisterUser: User => dispatch(RegisterUser(User)),
  };
};
export default connect(null,mapDispacthToProps)(registerUser);