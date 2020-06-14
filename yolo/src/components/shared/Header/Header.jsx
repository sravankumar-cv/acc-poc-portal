import React, {useState, useEffect} from 'react';
import { history } from '../../../store';
import { 
    AppBar, Toolbar, 
    Typography, CssBaseline,
    Link, Button, makeStyles
} from '@material-ui/core';

export default function Header() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=> {
        if(history.location.pathname !== '/login' || '/register') {
            setIsLoggedIn(true);
        }
        setIsLoggedIn(false);
    },[]);

    const renderRegister = ()=> {
        if(history.location.pathname === '/') {
            return <Button variant="contained" className={classes.margin}>Sign Up</Button>
        }
        if(history.location.pathname === '/login') {
            return  <Button variant="contained" className={classes.margin}>Sign Up</Button>
        }
        return null;
    }

    const renderLogin = ()=> {
        if(history.location.pathname === '/') {
            return <Button variant="contained" className={classes.margin}>Login</Button>
        }
        if(history.location.pathname === '/register') {
            return  <Button variant="contained" className={classes.margin}>Login</Button>
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
            <>
            <CssBaseline />
            <AppBar>
                <Toolbar>
                <Typography variant="h6">Yoloj Platform</Typography>
                <Link
                    underline='hover'
                >Button
                </Link>
                <div className={classes.toolbarButtons}>
                    {
                        isLoggedIn ? null : 
                            <div>
                                <Button className={[classes.margin, classes.btnColorWhite]}>Create your Provider</Button>
                                <Button className={[classes.margin, classes.btnColorWhite]}>Help</Button>
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
            </>
        )
}
