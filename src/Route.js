
import React, { Component, Fragment } from "react";
import { Router, Switch, Route } from "react-router-dom";
//import homepage from "./components/Homepage/homepage";
import PersistentDrawerLeft from './components/headerComponents/App-Bar/appBar';
import PrimarySearchAppBar from './components/headerComponents/App-Bar/Another-App-Bar';
import NavBar from './components/headerComponents/nav';
import registerPartner from './components/register-partner/register-partner';
import registerUser from "./components/register-user/register-user";
import FinalRegisterPage from './components/register-partner/finalRegisterPage';
import userprofile from './components/user-profile/userProfile';
import Dashboard from './components/Dashboard/Dashboard';
import history from './history';
import Homepage from "./components/Homepage/homepage";

export default class Routes extends Component {
    constructor(props){
        super()
    }
    render() {
        return (
            <Router history={history}>
                 {/* <Route  exact path="/" component={NavBar} /> */}
                 <Route exact path="/" render={props=>
                <Fragment>
                {/* <NavBar/> */}
                <PersistentDrawerLeft/>
                {/* <PrimarySearchAppBar/> */}
                {/* <Homepage/> */}
                </Fragment>
                
                }/>
                <Switch>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route  path="/registerUser" component={registerUser} />
                    <Route  path="/registerPartner" component={registerPartner} />
                    <Route  path="/:finalsetpsforRegistration" component={FinalRegisterPage} />
                    <Route  path="/:userProfile" component={userprofile} />
                    
                   
                    >
                    {/* <Route path="/Products" component={Products} /> */}
                </Switch>
            </Router>
        )
    }
}