import React from 'react';
import HeaderContainer from '../../containers/headerContainer';
import { 
    Button, Snackbar, Grid,
    Card, Avatar, CardActionArea,
} from '@material-ui/core';
import './Home.css';
import { Rating } from '@material-ui/lab';
import { store } from '../../store';
import CardErrorBoundary from '../shared/CardErrorBoundary';
import log from '../../utils/logger.service'

export default class Home extends React.Component {
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
    componentDidMount () {
        document.title = 'Welcome to Infosys - Yolo Network';
        this.props.getAllProvider();
        store.subscribe(()=>{
            if(store.getState().getAllApprovedProvider.error) {
                this.setState({
                    open: true
                })
                this.setState({
                    errorMessage: store.getState().getAllApprovedProvider.error
                })
            } else {
                this.setState({
                    providerData: store.getState().getAllApprovedProvider.success
                })
            }
        })
    }
    
    change = (e) => {
        const { name, value } = e.target;
        switch(name) {
            case 'location':
                this.setState({location: value});
            break;
            case 'name':
                this.setState({name: value});
                break;
            default:
                break;
        }
    }

    handleClose = () => {
        this.setState({dialogOpen: false})
    }

    handleClickOpen = () => {
        this.setState({dialogOpen: true});
    }

    render() {
        return(
            <div>
                <HeaderContainer />
                <Grid container spacing={24} style={{marginTop:200, marginLeft: 200}}>
                    {
                        (this.state.providerData && this.state.providerData.length) ? this.state.providerData.map((itemz, index)=> {
                            return (
                                <Grid item md={3} key={index} className="rootGrid" style={{marginRight: 20, marginBottom: 20}}>
                                    <CardErrorBoundary>
                                        <Card style={{minHeight: 200, minWidth: 100}}>
                                            <CardActionArea style={{paddingLeft: 20, paddingTop: 20}}>
                                                <div>
                                                    <Avatar alt="org_logo" src={require('../../assets/Facebook_headquarters_building.jpg')}/>
                                                    <div style={{position: 'absolute', left:10}}>
                                                        <span className="orgName">{itemz.OrganizationName}</span><br />
                                                        <Rating name="read-only" value={4.1} readOnly />
                                                        <span style={{position: 'absolute', left:3, top:50}}>{itemz.OrganizationAddress}</span>
                                                    </div>
                                                </div>
                                            </CardActionArea>
                                        </Card>
                                    </CardErrorBoundary>  
                                </Grid>
                            )
                        }) : <span>We do not have enough data right now. Please check back later.</span>
                    }
                </Grid>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.open}
                    autoHideDuration={5000}
                    onClose={(e,r)=>this.handleClose(e,r)}
                    message={this.state.errorMessage}
                    action={
                    <React.Fragment>
                        <Button color="secondary" size="small" onClick={(e,r)=>this.handleClose(e,r)}>
                            Hide
                        </Button>
                    </React.Fragment>
                    }
                />
            </div>
        )
    }
}