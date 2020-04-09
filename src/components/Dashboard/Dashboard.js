import React from 'react';
import {Redirect} from "react-router-dom";
export default class Dashboard extends React.Component{
    constructor(props){
        super();
        this.state={
         userdata:{
          id:"",
          messege:""
         } 
        }
    }
    componentDidMount(){
      console.log('wcqwvcqjcvjqvcjvcjqcvq ',this.props.location.state);
      if(this.props.location.state){
        // const data={
        //   id:this.props.location.state.id,
        //   messege:this.props.location.state.messege
        // }
         //this.setState({userdata:data});
      }
     //this.setState({id:this.props.location.state.id});
    }
  render() {
    if(this.state.userdata.id.messege!=="success !"){
      return <Redirect to={{
        pathname:'/'
      }}/>;
    }else if (this.state.userdata.id.messege==="success !"){
      return (
        <div>
            <h1>inside dashboard protective route</h1>
          <h1>the login user dashboard is {this.state.userdata.id} </h1>
        </div>
      );
    };
    }
  
};