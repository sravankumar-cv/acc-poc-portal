import React, {useState, useEffect} from 'react';
import { history } from '../../../store';
import { 
    AppBar, Toolbar, 
    Typography, CssBaseline,
    Link, Button, IconButton, Icon, 
    makeStyles, Avatar, Popover,
    List, ListItemIcon, ListItem, Divider, ListItemText
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
                <Typography variant="h6">Yolo Network</Typography>
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
                            </div>
                    }
                    {
                        renderRegister()
                    }
                    {
                        renderLogin()
                    }
                    {
                        isLoggedIn ? <div>
                            <IconButton onClick={handleClick}>
                                <Avatar>U</Avatar>
                                <Popover
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                >
                                    <div className={classes.popoverRoot}>
                                        <List component="nav">
                                            <ListItem button>
                                                <ListItemIcon>
                                                    <Icon className="fa fa-cog"></Icon>
                                                </ListItemIcon>
                                                <ListItemText primary="Settings"/>
                                            </ListItem>
                                            <ListItem button>
                                                <ListItemIcon>
                                                    <Icon className="fa fa-cog"></Icon>
                                                </ListItemIcon>
                                                <ListItemText primary="Get Help"/>
                                            </ListItem>
                                            <ListItem button>
                                                <ListItemIcon>
                                                    <Icon className="fa fa-cog" aria-hidden="true"></Icon>
                                                </ListItemIcon>
                                                <ListItemText primary="Demo"/>
                                            </ListItem>
                                        </List>
                                        <Divider />
                                        <List component="nav">
                                            <ListItem button>
                                                <ListItemIcon>
                                                    <Icon className="fa fa-sign-out" aria-hidden="true"></Icon>
                                                </ListItemIcon>
                                                <ListItemText primary="Trash" />
                                            </ListItem>
                                        </List>
                                    </div>
                                </Popover>
                            </IconButton>
                        </div>
                        : null
                    }
                    
                </div>
                </Toolbar>
            </AppBar>
            </>
        )
}
