import React from 'react';
import ProcHeader from '../../containers/procHeaderContainer';
import UserProfileContainer from '../../containers/userProfleContainer';

export default class Dashboard extends React.Component {

    constructor(props) {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        document.title = 'Yoloj - User Profile';
    }

    render() {
        return(
            <div>
                <ProcHeader />
                <div style={{paddingTop:100}}>
                    <UserProfileContainer />
                </div>
            </div>
        )
    }
}