import  React from 'react';
import history from "../../history";
import {Form,Button, Container,Card, Row, Col} from "react-bootstrap";
export default  class registerUser extends React.Component{
    constructor(props){
        super();
        this.state={
            name:"",
            phoneNo:"",
            email:"",
        }
        this.handleOnChange = this.handleOnChange.bind(this);
            this.handleOnSubmit = this.handleOnSubmit.bind(this);
            this.handleOnfileSelect=this.handleOnfileSelect.bind(this);
    }
    handleOnSubmit=(e)=>{
        e.preventDefault();
        console.log('inside on submit');
        console.log(this.state);
        history.push({
            pathname:'/userProfile',
            state:{
              name:this.state.name,
              phoneNo:this.state.phoneNo,
              email:this.state.email,
              file:this.state.file
            }
        })
        // history.push({
        //     pathname:'/userProfile'
        // })
    }    
    handleOnChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
    }
    handleOnfileSelect=(event)=>{
        this.setState({file:event.target.files[0]});
    }
   render(){
       return (
           <React.Fragment>
               <h1>register user </h1>
               <Container>
            <Row>
                <Col>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Register For User </Card.Title>
    <Form  onSubmit={this.handleOnSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Control
     type="email" 
     onChange={this.handleOnChange}
     placeholder="Enter email"
     name="email"
     /> 
  </Form.Group>
  <Form.Group controlId="formBasicName">
    <Form.Control 
    type="text"
    name="name"
    onChange={this.handleOnChange}
    placeholder="Enter  Your Name" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Control 
    type="number" 
    name="phoneNo"
    onChange={this.handleOnChange}
    placeholder="Enter Phone Number" />
  </Form.Group>


  {/* <Button variant="primary" type="submit">
    Submit
  </Button> */}
  <Button variant="primary" style={{width:'12rem'}} type="submit">Register </Button>
</Form>
    
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
           </React.Fragment>
       )
   }
};
