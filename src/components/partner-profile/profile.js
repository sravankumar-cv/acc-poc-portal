import React from "react";
import axios from "axios";
import "./profile.css";
import history from "../../history";
import {Navbar,Nav,NavDropdown ,Container, Row, Col,Button} from "react-bootstrap";
class partnerProfile extends React.Component{
constructor(props){
    super();
    this.state={
        partnername:"",
        partnerEmail:"",
        partnerPhoneNo:"",
        dataset:{
            type:[],
            Experise:[],
            INDIVIDUAL:[],
            BUSINESS:[]
        },
            type:[],
            Experise:[],
            INDIVIDUAL_VAL:{name:"",value:null},
            BUSINESS_VAL:{name:"",value:null},
        
        showIndividual:false,
        showBusiness:false,
        
        typeError:"",
        ExpertiseError:""

        
    }
    this.handleIndividual=this.handleIndividual.bind(this);
    this.handleBusiness=this.handleBusiness.bind(this);
    this.handleFinisRegistration=this.handleFinisRegistration.bind(this);
    this.handleOnBusinessChange=this.handleOnBusinessChange.bind(this);
}
componentDidMount(){
    //console.log(this.props);
    // const { handle } = this.props.match.params
    // const { data } = this.props.location.state
    //console.log(this.props.match.params);
    // console.log(this.props.location.state);
    axios.get('./db.json').then((val)=>{
        //console.log(typeof(val));
        //console.log('the type are',val.data);
        this.setState({dataset:val.data});
    }).catch(err=>console.log(err));
    
}
handleOnBusinessChange=(businessName)=>{
    this.state.dataset.BUSINESS.find(t=>{
        return t===businessName;
    })
}
handleIndividual=(event)=>{
    console.log('inside handleindividual');
    // const individual=this.state.dataset.INDIVIDUAL.map(values=>{
    //     console.log(values);
    // })
    if(this.state.showIndividual){
        this.setState({showIndividual:false});
    }
    else
    this.setState({showIndividual:true});
    }
handleBusiness=(event)=>{
    console.log('inside handleBusiness');
    if(this.state.showBusiness){
        this.setState({showBusiness:false});
    }
    else
        this.setState({showBusiness:true});
}
handleFinisRegistration=(event)=>{
    if(this.state.type.size()<1){
        this.setState({typeError:"please choose any type"});
    }
    else if (this.state.Experise.size()<1){
        this.setState({ExpertiseError:"please choose any expertise"});
    }
    else{
        //backend api call axios.post('some api endpoint').then(if promise resolve navigate to homepage)
        //page redirection   for now lets use react router to navigate to home page
        history.push('/');
    }
}
render(){
    
    //let flag=1;
    const individualData=this.state.dataset.INDIVIDUAL;
    const businessData=this.state.dataset.BUSINESS;
    const myTypedata=this.state.dataset.type;
    const myExpertiseData=this.state.dataset.Experise;
    let mydata=[];
    let tempTypeData= myTypedata.map(val=>{
       // console.log(val);
        return (
         <span className="myspans" id={Math.random()} key={Math.random()} onClick={(e)=>{
             if(!this.state.type.find(t=>{
                 return t===val;
             })){
                console.log('inside if');
                console.log('size of array becomes ',mydata.unshift(val));
                console.log('aloo',mydata);
                //console.log(typeof(mydata));
                this.setState({type:mydata});
                //console.log('state becomes after selection if value doesnt exist ',this.state);
             }
             else{
                 console.log('double click');
             }
             
         }}> 
              {val}
         </span>
       
        )
    });

    let temExpertiseData=myExpertiseData.map(val=>{
        return (
            <span className="myspans" id={Math.random()} key={Math.random()} onClick={(e)=>{
                console.log(e.target.id,"and value is ",val);
                if(!this.state.type.find(t=>{
                    return t===val;
                })){
                   const mydata=val;
                   this.setState({type:mydata});
                   console.log('state becomes after selection expertise if value doesnt exist ',this.state);
                }
                
                console.log('state becomes withot after selection expertise ',this.state);
            }}> 
                 {val}
            </span>
    )
        });
       let individualFinalData=[]
        if(this.state.showIndividual){
            console.log('show individual is true');
            individualFinalData=individualData.map(values=>{
                console.log(values);
                return (
                    <Row style={{marginTop:"2px"}}>
                        <Col>{values} </Col>
                        
                        <Col><input type={"text"} /></Col>
                    </Row>
                
                    // <Col md={3}>
                    //     <input type={"text"}/>
                    // </Col>
                    
                );
            })
        }
        else{
            individualFinalData=[];
        }
    let businessFinalData=[];
        if(this.state.showBusiness){
            businessFinalData=businessData.map(values=>{
                return (
                    <Row style={{marginTop:"2px"}}>
                        <Col>{values} </Col>
                        
                        <Col><input type={"text"} onChange={() => this.handleOnBusinessChange({values})}/></Col>
                    </Row>
                )
            })
        }
        else{
            businessFinalData=[];
        }
    //console.log('inside render logging state ',this.state);
    return (
        //Nav Bar 
        <React.Fragment>
        <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">{`Welcome ${this.props.location.state.firstName} ${this.props.location.state.lastName}`}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>


<Container fluid>
    <Row style={{marginTop:"30px"}}>
        <h3>Choose Your Type:</h3>
    </Row>
    <Row>
        {tempTypeData}
    </Row>
    <Row style={{marginTop:"30px"}}>
        <h3>Choose Your Expertise:</h3>
    </Row>
    <Row>
        {temExpertiseData}
    </Row>
    <Row style={{marginTop:"30px"}}>
        <Col style={{border:"2px solid black"}} xs={12} md={6}>
        <input type={"checkbox"} onChange={(event)=>{
            console.log('changed individual',event);
            this.handleIndividual();
            //individualFinalData
        }}/> INDIVIDUAL
        
        {individualFinalData}
        
        </Col>
        <Col style={{border:"2px solid black"}}  xs={12} md={6}>
        {/* <InputGroup.Checkbox style={{ marginLeft: '15px' }} >INDIVIDUAL </InputGroup.Checkbox> */}
        <input type={"checkbox"} onChange={(event)=>{
            console.log('changed individual',event);
            this.handleBusiness();
        }}/> BUSINESS

        {businessFinalData}

        </Col>
    </Row>
</Container>
<Container fluid>
    <Row style={{marginTop:"20px"}}>
        <Col>
            <Button onClick={(event)=>{
                console.log(this.state.type);
                history.push('/');
                // {this.handleFinisRegistration(event)}
            }}>Finish Registration</Button>
        </Col>
    </Row>
</Container>
</React.Fragment>
    )


}

}
export default partnerProfile;