import React from "react";
import {Form,Button, Container,Card, Row, Col} from "react-bootstrap";
import history from "../../history";
class registerPartner extends React.Component{
constructor(props){
    super();
    this.state={
        name:"",
        phoneNo:"",
        email:"",
        file:null
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
        pathname:'/partnerProfile',
        state:{
          name:this.state.name,
          phoneNo:this.state.phoneNo,
          email:this.state.email,
          file:this.state.file
        }
    })
    

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
        <h1>register-partner</h1>
        <Container>
            <Row>
                <Col>
        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Register For Partner </Card.Title>
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
    type="text" 
    name="phoneNo"
    onChange={this.handleOnChange}
    placeholder="Enter Phone Number" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Control
    name="file"
    onChange={this.handleOnfileSelect}
    accept='.jpg'
    type="file"/> Upload PanCard
  </Form.Group>

  {/* <Button variant="primary" type="submit">
    Submit
  </Button> */}
  <Button variant="primary" style={{width:'12rem'}} type="submit">
      {/* <Link to= {{pathname:'/partnerProfile',state:{
          name:this.state.name,
          phoneNo:this.state.phoneNo,
          email:this.state.email,
          file:this.state.file
      }}} style={{color:"white", textDecoration:"none"}}> */}
           Get Started 
        {/* </Link> */}
    </Button>
</Form>
    
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
</React.Fragment>
    )
}
}
export default registerPartner