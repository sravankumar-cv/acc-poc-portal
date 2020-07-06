import React from 'react';

export default class ProviderProfile extends React.Component {

    componentDidMount() {
       let demo= new URLSearchParams(window.location.search);
      let  myParam = demo.get('user');
       console.log(myParam);
    }
    render() {
        return(
            <div>
                Hey from ProviderProfile
            </div>
        )
    }
}