import React, {useState, useEffect} from 'react';
import { 
    AppBar, Toolbar, 
    Typography, CssBaseline, Select,
    Link, Button, makeStyles, TextField, Icon, Popper, Fade,
    Paper, InputBase, Grid, Snackbar, NativeSelect, InputLabel, ClickAwayListener, MenuItem
} from '@material-ui/core';
import LoginPopUpContainer from '../../../containers/LoginPopUpContainer';
import { store, history } from '../../../store';
import { 
    TOGGLE_LOGIN_DIALOG, 
    FILTER_PROVIDER_BY_COUNTRY, 
    FILTER_PROVIDER_BY_SEARCH,
    FILTER_BY_FINANCIAL_SERVICES,
    FILTER_BY_BUSINESS_SERVICES
} from '../../../types/utils';

export default function Header(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [openDialog, setOpen] = useState(false);
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [anchorE, setAnchorE] = React.useState(null);
    const [placement, setPlacement] = React.useState();
    const [errorMessage, setErrorMessage] = useState("");
    const [openPopper, setOpenPopper] = useState(false);
    const [countriesList, setCountriesList] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("India");
    const [selectedSearchItem, setselectedSearchItem] = useState("All");
    const [businessTypes, setBusinessTypes] = useState([]);
    const [financialTypes, setFinancialTypes] = useState([]);
    const [selectedBusinessType, setSelectedBusinessType] = useState("Company Secretary");
    const [selectedFinancialType, setSelectedFinancialType] = useState("Banking");

    useEffect(()=> {
        if(history.location.pathname !== '/login' || '/register') {
            setIsLoggedIn(true);
        }
        setIsLoggedIn(false);
        props.getCountriesList();
        props.getBusinessTypes();
        props.getFinancialServices();
        store.subscribe(()=> {
            setCountriesList(store.getState().getCountries.countries);
            setBusinessTypes(store.getState().getBusinessTypes.success);
            setFinancialTypes(store.getState().getFinancialService.success);
        })
    },[]);

    const navigateToRegister = () => {
        history.push('/register');
    }

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

    const navigateToProviderRegister = () => {
        history.push('/provider/register');
    }

    const navigateToProviderLogin = () => {
        history.push('/provider/login');
    }

    const performSearch = (e) => {
        store.dispatch({
            type: FILTER_PROVIDER_BY_SEARCH,
            payload: {
                'selectedCategory': selectedSearchItem,
                'item': e.target.value
            }
        })
    }

    const renderRegister = ()=> {
        if(history.location.pathname === '/') {
            return (
                <Button variant="contained" className={classes.margin} onClick={navigateToRegister}>Sign Up</Button>
            )
        }
        if(history.location.pathname === '/login') {
            return  <Button variant="contained" className={classes.margin}>Sign Up</Button>
        }
        return null;
    }

    const handleSelectedCountry = (e) => {
        setSelectedCountry(e.target.getAttribute('data-value'))
        store.dispatch({
            type: FILTER_PROVIDER_BY_COUNTRY,
            payload: e.target.getAttribute('data-value')
        })
    }

    const handleSelectedBusinessType = (e) => {
        setSelectedBusinessType(e.target.getAttribute('data-value'));
        store.dispatch({
            type: FILTER_BY_BUSINESS_SERVICES,
            payload: e.target.getAttribute('data-value')
        })
    }

    const handleSelectedFinancialType = (e) => {
        setSelectedFinancialType(e.target.getAttribute('data-value'));
        store.dispatch({
            type:FILTER_BY_FINANCIAL_SERVICES,
            payload: e.target.getAttribute('data-value')
        })
    }

    const handleClosed = () => {
        setOpen(!openDialog)
        store.dispatch({
            type: TOGGLE_LOGIN_DIALOG,
            payload: openDialog
        })
    }

    const handlePopper = (e) => {
        setOpenPopper(!openPopper);
        setAnchorE(e.currentTarget);
    }

    const handleSelectedCategory = (e) => {
        setselectedSearchItem(e.target.getAttribute('data-value'))
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
                 <div style={{display:'inline'}}>
                 <Button variant="contained" 
                     className={classes.margin} 
                     onClick={handleClosed}>Login
                 </Button>
                 <LoginPopUpContainer />
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
                    <div className="PlatformName">
                        <Typography variant="h6">Yoloj Platform</Typography>
                        <Select value={selectedCountry} style={{color: '#fff'}}>
                        {
                            (countriesList && countriesList.length) ? countriesList.map((item, index) => {
                                return(<MenuItem key={index} value={item.name} autoWidth={true} onClick={handleSelectedCountry}>{item.name}</MenuItem>)
                            }) : <span>Loading....</span>
                        }
                        </Select>
                    </div>
                    <Select value={selectedSearchItem} style={{marginRight: 10, color:"#fff", width:"100px"}}>
                        <MenuItem value={"all"} autoWidth={true} onClick={handleSelectedCategory}>All Categories </MenuItem>
                        <MenuItem value={"name"} autoWidth={true} onClick={handleSelectedCategory}>Name</MenuItem>
                        <MenuItem value={"orgName"} autoWidth={true} onClick={handleSelectedCategory}>Organization Name</MenuItem>
                    </Select>
                    <TextField InputProps={{
                        endAdornment: (
                            <Icon className="fa fa-search" aria-hidden="true"/>
                        )
                    }}
                    style={{color:"#fff", width:"500px",cursor: "pointer"}}
                    onChange={performSearch}
                    >
                    </TextField>

                    <Select value={selectedBusinessType} style={{marginLeft:10,color: '#fff'}}>
                        {
                            (businessTypes && businessTypes.length) ? businessTypes.map((item, index)=> {
                                return(<MenuItem key={index} value={item.name} onClick={handleSelectedBusinessType}>{item.name}</MenuItem>)
                            }) : <span>Loading....</span>
                        }
                    </Select>

                    <Select value={selectedFinancialType} style={{marginLeft:10,color: '#fff'}}>
                        {
                            (financialTypes && financialTypes.length) ? financialTypes.map((item, index)=> {
                                return(<MenuItem key={index} value={item.name} onClick={handleSelectedFinancialType}>{item.name}</MenuItem>)
                            }) : <span>Loading...</span>
                        }
                    </Select>
                    <div className={classes.toolbarButtons}>
                        {
                            isLoggedIn ? null : 
                                <div>
                                    <Button className={[classes.margin, classes.btnColorWhite]} onClick={handlePopper}>Providers</Button>
                                    <Button className={[classes.margin, classes.btnColorWhite]}>Contact Us</Button>
                                    {
                                        renderRegister()
                                    }
                                    {
                                        renderLogin()
                                    }
                                </div>
                        }
                    </div>
                    <Popper open={openPopper} placement={"bottom"} transition anchorEl={anchorE} style={{marginTop:20, width:"300px"}}>
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <ClickAwayListener onClickAway={handlePopper}>
                                <Paper className="balloon">
                                    <div className="arrow"></div>
                                    <div className="mainPopContent">
                                        <Button variant="contained" className={classes.margin} style={{minWidth:250, marginLeft:30}} onClick={navigateToProviderRegister}>Provider Register</Button><br/>
                                        <Button variant="contained" className={classes.margin} style={{minWidth:250, marginLeft:30}} onClick={navigateToProviderLogin}>Provider Login</Button>
                                    </div>
                                </Paper>
                            </ClickAwayListener>
                        </Fade>
                    )}
                </Popper>
                </Toolbar>
            </AppBar>
            </React.Fragment>
        )
}
