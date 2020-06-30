import React from 'react';
import Header from '../components/shared/Header/Header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchProviderByName from '../actions/searchByNameAction';
import * as getCountriesAction from '../actions/getUtilsAction';

class HeaderContainer extends React.Component {
    render() {
        return <Header 
            searchByName = {this.props.searchByName} 
            getCountriesList = {this.props.getCountriesList}
        />
    }
    
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        searchByName: searchProviderByName.searchProviderByName,
        getCountriesList: getCountriesAction.getCountriesList,
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(HeaderContainer);