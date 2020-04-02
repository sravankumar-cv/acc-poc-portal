import React from 'react';
export  default class userprofile extends React.Component{
  constructor(props){
    super();
    this.state={

    }
  }
  render() {
    return (
      <div>
          profile page of  {this.props.location.state.name}
      </div>
    );
  };
};