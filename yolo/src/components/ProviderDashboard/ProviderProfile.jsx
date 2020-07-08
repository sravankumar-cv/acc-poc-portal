import React from 'react';

import HeaderContainer from '../../containers/headerContainer';
import { 
    Button, Snackbar, Grid,
    Card, Avatar, CardActionArea,
} from '@material-ui/core';

import { Rating } from '@material-ui/lab';
import { store } from '../../store';
import CardErrorBoundary from '../shared/CardErrorBoundary';
import log from '../../utils/logger.service'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {Link} from 'react-router-dom';

export default class ProviderProfile extends React.Component {
    constructor(props) {
        super();
        this.state = {
            open: false,
            errorMessage: '',
            providerData: [],
            location: '',
            dialogOpen: false,
            name: ''
        }
    }
    componentDidMount() {
       let demo= window.location.search;
       let  myParam = demo.split("=");
       let Id = myParam[1];
       
       
    }
    render() {
    
            return(
                <div>
                    Hey from Providerprofile
                </div>
            )
    }
}