import React from 'react';
import { Component, Fragment } from "react";
import Grid from '@material-ui/core/Grid';
import { TextField, Button, Typography, LinearProgress, FormGroup } from '@material-ui/core';
import HeaderContainer from '../../containers/headerContainer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

class ChooseLoginRegister extends Component {

    state = {
        url :"",
        loading : false,
        redirect : false,
        cartItems : []
    }

    render() {

        return (
            <div>
                {this.loading &&
                <LinearProgress/>}
                <HeaderContainer />
                <Grid style={{margin:"10px"}}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                   
                    <ListItemText primary="User Login" />
                    </ListItem>
                    <ListItem button>
                    
                    <ListItemText primary="User Register" />
                    </ListItem>

                    <ListItem button>
                   
                    <ListItemText primary="Provider Login" />
                    </ListItem>
                    <ListItem button>
                    
                    <ListItemText primary="Provider Register" />
                    </ListItem>
                </List>
                </Grid>
                </div>
        );
    }
}

export default ChooseLoginRegister;