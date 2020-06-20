import React from 'react';
import Header from '../components/shared/Header/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchProviderByName from '../actions/searchByNameAction';

class HeaderContainer extends React.Component {
    render() {
        return <Header searchByName = {this.props.searchByName} />
    }
    
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        searchByName: searchProviderByName.searchProviderByName
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(HeaderContainer);