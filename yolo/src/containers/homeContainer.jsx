import React from 'react';
import Home from '../components/Home/Home';
import { connect } from 'react-redux';
import * as searchProviderByName from '../actions/searchByNameAction';
import { bindActionCreators } from 'redux';

class HomeContainer extends React.Component {
    render() {
        return <Home 
            searchByName = {this.props.searchByName}
        />
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        searchByName: searchProviderByName.searchProviderByName
    }, dispatch)
} 

export default connect(null, mapDispatchToProps)(HomeContainer)