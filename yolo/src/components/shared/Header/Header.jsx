import React, {useState, useEffect} from 'react';
import { 
    AppBar, Toolbar, 
    Typography, CssBaseline,
    Link, Button, makeStyles,
    Paper, InputBase, Grid, Snackbar
} from '@material-ui/core';
import LoginPopUpContainer from '../../../containers/LoginPopUpContainer';
import { store, history } from '../../../store';
import { TOGGLE_LOGIN_DIALOG } from '../../../types/utils';

export default function Header(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [openDialog, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(()=> {
        if(history.location.pathname !== '/login' || '/register') {
            setIsLoggedIn(true);
        }
        setIsLoggedIn(false);

    },[]);

    const change = (e) => {
        const { name, value } = e.target;
        switch(name) {
            case 'location':
                setLocation(value);
            break;
            case 'name':
                setName(value);
                break;
            default:
                break;
        }
    }

    const performSearch = () => {
        props.searchByName(name,location);
        // store.subscribe(()=>{
        //     if(store.getState().searchProviderByName.error) {
        //         this.setState({
        //             open: true
        //         })
        //         this.setState({
        //             errorMessage: store.getState().searchProviderByName.error
        //         })
        //     }
        // })
    }
    const renderRegister = ()=> {
        if(history.location.pathname === '/') {
            return <Button variant="contained" className={classes.margin}>Sign Up</Button>
        }
        if(history.location.pathname === '/login') {
            return  <Button variant="contained" className={classes.margin}>Sign Up</Button>
        }
        return null;
    }

    const handleClosed = () => {
        setOpen(!openDialog)
        store.dispatch({
            type: TOGGLE_LOGIN_DIALOG,
            payload: openDialog
        })
    }

    const renderLogin = ()=> {
        if(history.location.pathname === '/') {
            return (
                <div style={{display:'inline'}}>
                    <Button variant="contained" 
                        className={classes.margin} 
                        onClick={handleClosed}>Login
                    </Button>
                    <LoginPopUpContainer />
                </div>
            )
        }

        if(history.location.pathname === '/register') {
            return  (
                <div>
                    <Button variant="contained" className={classes.margin}>Login</Button>
                </div>
                
            )
        }
        return null;
    }

    const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        toolbarButtons: {
            marginLeft: 'auto',
          },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        btnColorWhite: {
            color: '#ffff'
        },
        popoverRoot: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
        margin: {
            margin: theme.spacing(1),
        },
        title: {
          flexGrow: 1,
        },
    }));

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

        return(
            <React.Fragment>
            <CssBaseline />
            <AppBar>
                <Toolbar>
                <Typography variant="h6">Yoloj Platform</Typography>
                <Paper style={{flex:1, alignSelf:'center', alignItems:'center', marginLeft:'100px',paddingTop:'10px', maxWidth: 800}}>
                    <InputBase
                        placeholder="Search by Location"
                        className="input"
                        inputProps={{ 'aria-label': 'Search by Name or Services offered' }}
                        onChange={change}
                        id="location"
                        name="location"
                    />
                    <InputBase
                        placeholder="Search by Name"
                        className="input"
                        inputProps={{ 'aria-label': 'Search by Name or Services offered' }}
                        onChange={change}
                        name="name"
                    />
                    <Button variant="contained" color="secondary" onClick={performSearch} style={{marginBottom:10}}>Search</Button>
                </Paper>
                <div className={classes.toolbarButtons}>
                    {
                        isLoggedIn ? null : 
                            <div>
                                <Button className={[classes.margin, classes.btnColorWhite]}>Provider Login</Button>
                                {
                                    renderRegister()
                                }
                                {
                                    renderLogin()
                                }
                            </div>
                    }
                </div>
                </Toolbar>
            </AppBar>
            </React.Fragment>
        )
}
