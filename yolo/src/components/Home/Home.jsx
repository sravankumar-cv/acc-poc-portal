import React from 'react';
import Header from '../shared/Header/Header';

export default class Home extends React.Component {

    componentDidMount () {
        document.title = 'Welcome to Infosys - Yolo Network';
    }
    
    render() {
        return(
            <div>
                <Header />
                Home
            </div>
        )
    }
}