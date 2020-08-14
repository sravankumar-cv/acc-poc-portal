import React from 'react';
import Header from '../components/shared/Header/Header';
import HeaderLinks from '../components/shared/Header/HeaderLinks';
import AppBar from "@material-ui/core/AppBar";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchProviderByName from '../actions/searchByNameAction';
import * as getCountriesAction from '../actions/getUtilsAction';
import * as getBusinessTypesAction from '../actions/getBusinessTypesAction';
import * as financialServicesAction from '../actions/getFinancialServiceAction';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InfoIcon from '@material-ui/icons/Info';

class HeaderContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
  }

  componentDidMount() {
    const handler = e => this.setState({matches: e.matches});
    window.matchMedia("(min-width: 768px)").addListener(handler);
  }

    render() {
        return (
          <div >
          {this.state.matches && ( <Header
        brand=""
        rightLinks={<HeaderLinks />}
        fixed
        color="black"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
      />)}
          {!this.state.matches && ( 
          <AppBar position="fixed" color="primary" style={{top: "auto", bottom: 0}}>
            <BottomNavigation value={0} onChange={(event, newValue) => {}}>
            <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
            <BottomNavigationAction label="Search" value="search" icon={<SearchIcon />} />
            <BottomNavigationAction label="Profile" value="profile" icon={<AccountCircleIcon />} />
            <BottomNavigationAction label="Info" value="info" icon={<InfoIcon />} />
          </BottomNavigation>
        </AppBar>)}
          </div>
        );
    }
    
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        searchByName: searchProviderByName.searchProviderByName,
        getCountriesList: getCountriesAction.getCountriesList,
        getBusinessTypes: getBusinessTypesAction.getBusinessTypes,
        getFinancialServices: financialServicesAction.getFinancialServiceList
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(HeaderContainer);