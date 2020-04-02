import React from 'react';
export default class Dashboard extends React.Component{
    constructor(props){
        super();
    }
  render() {
    return (
      <div>
          <h1>inside dashboard protective route</h1>
        <h1>the login user dashboard is {this.props.location.state.userData} </h1>
      </div>
    );
  };
};