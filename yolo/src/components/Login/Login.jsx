import React from 'react';
import Header from '../shared/Header/Header';
import './Login.css';
import { 
    Grid, Container,
    InputLabel, Card,
    TextField, CardHeader,
    CardContent, CardActions,
    Snackbar, Button, Link
} from '@material-ui/core';
import { history, store } from '../../store';

export default class Login extends React.Component {

    constructor(props) {
        super();
        this.state = {
            email: '',
            password: '',
            errorMessage: '',
            open: false,
            errors: {
                email: '',
                password: ''
            }
        }
    }

    componentDidMount() {
        document.title = 'Yolo - Login';
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({open: false});
    };
    
    navigateToRegister = () => {
        history.push('/register');
    }

    login = (e) => {
        console.log(e);
    }

    change = (e) => {
        const { name, value } = e.target;
        let errors = this.state.errors;
        switch(name) {
            case 'email':
                errors.email = value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) ? '' : 'Invalid Email Address';
                break;
            case 'password':
                errors.password = value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/) ? '' : 'Password should be atleast 7 characters with alphanumeric characters';
                break;
            default:
                break;
        }
        this.setState({errors, [name]: value}, ()=> {
            return null;
        });
    }

    render() {
        return(
            <div>
                <Header />
                Login
            </div>
        )
    }
}