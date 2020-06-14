import React from 'react';
import Header from '../shared/Header/Header';
import { InputBase, 
    Button, Paper,
    Snackbar, Grid,
    Card, CardActions, 
    CardActionArea, 
    CardMedia, CardContent
} from '@material-ui/core';
import './Home.css';
import { Rating } from '@material-ui/lab';
import { store, history } from '../../store';

export default class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            open: false,
            errorMessage: '',
            providerData: [],
            location: '',
            name: ''
        }
    }
    componentDidMount () {
        document.title = 'Welcome to Infosys - Yolo Network';
        this.props.searchByName('', 'Bangladesh');
        store.subscribe(()=>{
            if(store.getState().searchProviderByName.error) {
                this.setState({
                    open: true
                })
                this.setState({
                    errorMessage: store.getState().searchProviderByName.error
                })
            } else {
                this.setState({
                    providerData: store.getState().searchProviderByName.success
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

    performSearch = () => {
        this.props.searchByName(this.state.name, this.state.location);
        store.subscribe(()=>{
            if(store.getState().searchProviderByName.error) {
                this.setState({
                    open: true
                })
                this.setState({
                    errorMessage: store.getState().searchProviderByName.error
                })
            } else {
                this.setState({
                    providerData: store.getState().searchProviderByName.success
                })
            }
        })
    }

    render() {
        return(
            <div>
                <Header />
                <Paper style={{marginTop:'100px',height:'50px', width: '50%', flex:1, alignSelf:'center', alignItems:'center', marginLeft:'300px',paddingTop:'10px'}}>
                    <InputBase
                        placeholder="Search by Location"
                        className="input"
                        inputProps={{ 'aria-label': 'Search by Name or Services offered' }}
                        onChange={(e)=> this.change(e)}
                        id="location"
                        name="location"
                    />
                    <InputBase
                        placeholder="Search by Name"
                        className="input"
                        inputProps={{ 'aria-label': 'Search by Name or Services offered' }}
                        onChange={(e)=> this.change(e)}
                        name="name"
                    />
                    <Button variant="contained" color="secondary" onClick={() => this.performSearch()}>Search</Button>
                </Paper>
                <Grid container spacing={24} style={{marginTop:50, marginLeft: 100}}>
                    {
                        (this.state.providerData && this.state.providerData.length) ? this.state.providerData.map((itemz, index)=> {
                            return (
                                <Grid item md={5} key={index} className="rootGrid" style={{marginRight: 20, marginBottom: 20}}>
                                    <Card>
                                        <CardActionArea>
                                            <CardMedia
                                                image={require('../../assets/Facebook_headquarters_building.jpg')}
                                                title={itemz.OrganizationName}
                                                className="media"
                                            />
                                            <CardContent>
                                                <b>{itemz.OrganizationName}</b><br/>
                                                <span>Location: {itemz.country}</span><br/>
                                                <span>Expertise on: {itemz.partnerType}</span><br/>
                                                <span>Address: {itemz.OrganizationAddress}</span><br />
                                                <Rating name="read-only" value={4.1} readOnly />
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary">Share</Button>
                                        </CardActions>
                                    </Card>
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