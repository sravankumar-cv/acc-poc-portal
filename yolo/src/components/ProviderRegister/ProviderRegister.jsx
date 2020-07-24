import React from 'react';
import HeaderContainer from '../../containers/headerContainer';
import './ProviderRegister.css';
import {default as RSelect} from 'react-select';
import makeAnimated from 'react-select/animated';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import CheckboxTree from 'react-checkbox-tree';
import data from '../../assets/businessTypes.json';
import data1 from '../../assets/businessType2.json';
import cities from '../../assets/city.json';
import {
    Container,
    InputLabel, Icon,
    StepLabel, Step, ExpansionPanelSummary,
    Stepper, TextField, Grid, Typography,
    Paper, Select, Avatar,
    MenuItem, Chip, ExpansionPanel, ExpansionPanelActions,
    Snackbar, Button, ExpansionPanelDetails
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { history, store } from '../../store';
import log from '../../utils/logger.service';
import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Multiselect } from 'multiselect-react-dropdown';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';

import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

//from ramids
const nodes = [{
    value: 'mars',
    label: 'Mars',
    children: [
        { value: 'phobos', label: 'Phobos' },
        { value: 'deimos', label: 'Deimos' },
    ],
}];



export default class ProviderRegister extends React.Component {
    constructor(props) {
        super();
        console.log("cities ",cities);
        this.state = {
            activeStep: 0,
            steps: ['Partner Details', 'Organization Details', 'Services Details', 'Service Type Details'],
            firstName: '',
            lastName: '',
            password: '',
            email: '',
            City: '',
            AllCities: cities,
            Fees: '',
            ALine1: '',
            ALine2: '',
            PinCode: '',
            // countries: [],
            businessList: ['Business Incorporation', 'GST Service', 'Startup Serices', 'Legal Complaince Service', 'Tax Returns', 'Goverment Registration', 'Trademark', 'Miscelleneous Services'],
            individualList: ['Tax returns', 'TDS', 'Legal', 'Miscelleneous Services'],
            businessList1: [
                { value: 'Business Incorporation', label: 'Business Incorporation' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' }
            ],
            countries: [
                { id: 1, name: 'Australia', hasChild: true, expanded: true },
                { id: 2, pid: 1, name: 'New South Wales' },
                { id: 3, pid: 1, name: 'Victoria' },
                { id: 4, pid: 1, name: 'South Australia' },
                { id: 6, pid: 1, name: 'Western Australia' },
                { id: 7, name: 'Brazil', hasChild: true },
                { id: 8, pid: 7, name: 'Paraná' },
                { id: 9, pid: 7, name: 'Ceará' },
                { id: 10, pid: 7, name: 'Acre' },
                { id: 11, name: 'China', hasChild: true },
                { id: 12, pid: 11, name: 'Guangzhou' },
                { id: 13, pid: 11, name: 'Shanghai' },
                { id: 14, pid: 11, name: 'Beijing' },
                { id: 15, pid: 11, name: 'Shantou' },
                { id: 16, name: 'France', hasChild: true },
                { id: 17, pid: 16, name: 'Pays de la Loire' },
                { id: 18, pid: 16, name: 'Aquitaine' },
                { id: 19, pid: 16, name: 'Brittany' },
                { id: 20, pid: 16, name: 'Lorraine' },
                { id: 21, name: 'India', hasChild: true },
                { id: 22, pid: 21, name: 'Assam' },
                { id: 23, pid: 21, name: 'Bihar' },
                { id: 24, pid: 21, name: 'Tamil Nadu' },
                { id: 25, pid: 21, name: 'Punjab' }
            ],

            field: { dataSource: this.countries, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' },
            indNodes: [],

            busNodes: [],
                 
            perChecked: [],
            perExpanded: [],
            busChecked: [],
            busExpanded: [],
            checked: [],
            expanded: [],
            selectedBusinesses: [],
            services: [],
            servivesList: [],
            selectedServices: [],
            actualServices: [],
            expertise: [],
            expertiseList: [],
            confirmPassword: '',
            phoneNumber: '',
            country_code: '+91',
            errorMessage: '',
            OrgName: '',
            base64: '',
            OrgAddress: '',
            OrgPINType: '',
            OrgCountry: 'India',
            OrgCity: 'Please Select you City',
            selectedCountry: '',
            importedCity:[],
            OrgRegNumber: '',
            OrgServiceType: '',
            OrgExpertise: [],
            open: false,
            showAlert: false,
            value: 0,
            errors: {
                firstName: '',
                lastName: '',
                OrgName: '',
                OrgAddress: '',
                OrgCountry: '',
                OrgRegNumber: '',
                OrgPINType: '',
                password: '',
                email: '',
                confirmPassword: '',
                phoneNumber: ''
            },
        }
    }

    name = (e) => {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = () => {
            this.setState({
                base64: reader.result
            });
        };
    }

    classes = makeStyles({
        root: {
            flexGrow: 1,
        },
    });

    //   const [value, setValue] = React.useState(0);

    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
    };

    handleDelete = (name) => {
        if(this.state.services.length === 1) {
            this.setState({
                showAlert: true
            })
            return null;
        }
        this.setState({
            services: this.state.services.filter(item=> item.name !== name.name)
        })
    }



    change = (e) => {
        const { name, value } = e.target;
        let errors = this.state.errors;
        switch (name) {
            case 'firstName':
                errors.firstName = value.length < 3 ? 'First Name should be 3 characters long' : null;
                break;
            case 'lastName':
                errors.lastName = value.length < 3 ? 'Last name should be 3 characters long' : null;
                break;
            case 'email':
                errors.email = value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) ? '' : 'Invalid Email Address';
                break;
            case 'password':
                errors.password = value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/) ? '' : 'Password should be atleast 7 characters with alphanumeric characters';
                break;
            case 'confirmPassword':
                errors.confirmPassword = (this.state.password === value) ? '' : 'Confirm Password should be equal to password';
                break;
            case 'phoneNumber':
                errors.phoneNumber = value.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) ? '' : 'Invalid phone number.';
                break;
            case 'OrgName':
                errors.OrgName = value.length < 3 ? 'Organization name should be 3 characters long' : '';
                break;
            case 'OrgAddress':
                errors.OrgAddress = value.length < 3 ? 'Ivalid Organization address' : '';
                break;
            case 'OrgRegNumber':
                errors.OrgRegNumber = value.length ? '' : 'Organization registration number is required';
                break;
            case 'OrgPINType':
                errors.OrgPINType = value.length ? '' : 'PIN type is required';
                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value }, () => {
            return null;
        });
    }

    componentDidMount() {
        log('User is on Provider Register Page')
        document.title = 'Yolo- Partner Register';
        this.props.getFinancialServiceList();
        this.props.getBusinessTypeList();
        this.props.getCountriesList();
	this.setState({
            indNodes: data
        });
        this.setState({
            busNodes: data1
        })

        this.setState({
            AllCities: cities
            
        })

        
        store.subscribe(() => {
            this.setState({
                services: store.getState().getFinancialService.success
            });
            this.setState({
                expertiseList: store.getState().getBusinessTypes.success
            });
            this.setState({
                countries: store.getState().getCountries.countries
            })
        });
        setTimeout(() => {
            this.state.services.map((item) => {
                var joined = this.state.servivesList.concat(item.name);
                this.setState({ servivesList:[...new Set(joined)]  });

            });
            this.setState({expertise: Array.from(new Set(this.state.expertiseList.map(a=>a.name)))
            .map(name=>{
                return this.state.expertiseList.find(a=>a.name === name)
            })})

        }, 5000);
        this.setState();
        this.CitySelect();
    }
    storeSelectedservices = (value) => {
       
        if (value.length === 0) {
                    this.setState({
                        showAlert: true

                    })
                    return null;
                }
        else{
            this.setState({actualServices: Array.from(new Set(value.map(a=>a)))
                .map(name=>{
                 return this.state.services.find(a => a.name === name)
             })})
             this.setState({showAlert:false});
        }

        
    }

    


    handleNext = () => {
        this.setState({
            activeStep: this.state.activeStep + 1
        })
    };

    handleBack = () => {
        this.setState({
            activeStep: this.state.activeStep - 1
        })
    };

    handleReset = () => {
        this.setState({
            activeStep: 0
        });
    };

    handleAccessCode = (e) => {
        this.setState({ country_code: e.target.getAttribute('data-value') });
    }

    CitySelect = () => {
        var join =[]
        this.state.AllCities.map((item)=> {
            if (item.country === this.state.OrgCountry)
            {
                 join.push(item)
                  this.setState({importedCity:join})
                
            }
        })
      }

    handleCountrySelect = (e) => {
       
        this.setState({
            OrgCountry: e.target.getAttribute('data-value'),
            selectedCountry:e.target.getAttribute('data-value')
        })

        setTimeout(() => {
            this.CitySelect()

        }, 1000);

        

       
    }

    handleCitySelect = (e) => {
      this.setState({
        OrgCity: e.target.getAttribute('data-value'),
        City: e.target.getAttribute('data-value')
      })

      
     
    }

    handleSelectedexpertise = (e, value) => {
        this.setState({ OrgExpertise: value });
        
    }

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };

    handleClick = () => {

    }

    createOrganization = () => {
        this.props.registerProvider(
            this.state.firstName + " " + this.state.lastName,
            this.state.password, this.state.email, this.state.phoneNumber,
            this.state.Fees,this.state.City,
            this.state.OrgCountry,this.state.ALine1,this.state.ALine2 ,
            this.state.PinCode,this.state.OrgName,
            this.state.OrgAddress, this.state.OrgRegNumber,
            this.state.OrgPINType, this.state.actualServices,
            this.state.base64, this.state.OrgExpertise
        );
        store.subscribe(() => {
            if (store.getState().registerProvider.error) {
                this.setState({ open: true });
                this.setState({ errorMessage: store.getState().registerProvider.error })
            } else {
                history.push('/provider/login');
            }

        })
    }

    handleSelectedservices = (event, value) => {
        this.setState({ selectedServices: value });
        this.storeSelectedservices(value);
    }


    renderMultiSelect = (options) => {
        const animatedComponents = makeAnimated();
        return (
            <RSelect
                className="multi-select"
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
                onChange={this.multiSelectGetValues}>
            </RSelect>
        );
    }

    multiSelectGetValues = (...vv) => {
        
        this.setState({
            selectedBusinesses: vv[0]
        });
    }

    renderMultiCheck = () => {
        return (
            <CheckboxTree
                nodes={this.state.busNodes}
                checked={this.state.checked}
                expanded={this.state.expanded}
                onCheck={checked => this.setState({ checked })}
                onExpand={expanded => this.setState({ expanded })}
                icons={{
                    check: <span className="rct-icon rct-icon-check" />,
                    uncheck: <span className="rct-icon rct-icon-uncheck" />,
                    halfCheck: <span className="rct-icon rct-icon-half-check" />,
                    expandClose: <span className="rct-icon rct-icon-expand-close" />,
                    expandOpen: <span className="rct-icon rct-icon-expand-open" />,
                    expandAll: <span className="rct-icon rct-icon-expand-all" />,
                    collapseAll: <span className="rct-icon rct-icon-collapse-all" />,
                    parentClose: null,
                    parentOpen: null,
                    leaf: null,
                }}
            />
        );
    }
    renderMultiCheck1 = () => {
        return (
            <CheckboxTree
                nodes={this.state.indNodes}
                checked={this.state.checked}
                expanded={this.state.expanded}
                onCheck={checked => this.setState({ checked })}
                onExpand={expanded => this.setState({ expanded })}
                icons={{
                    check: <span className="rct-icon rct-icon-check" />,
                    uncheck: <span className="rct-icon rct-icon-uncheck" />,
                    halfCheck: <span className="rct-icon rct-icon-half-check" />,
                    expandClose: <span className="rct-icon rct-icon-expand-close" />,
                    expandOpen: <span className="rct-icon rct-icon-expand-open" />,
                    expandAll: <span className="rct-icon rct-icon-expand-all" />,
                    collapseAll: <span className="rct-icon rct-icon-collapse-all" />,
                    parentClose: null,
                    parentOpen: null,
                    leaf: null,
                }}
            />
        );
    }


    getStepperContent = () => {

       
        if(this.state.activeStep === 3) {
            return(
                <Paper style={{height:500}}>
                    <h4>Please provide your service type details</h4>
                    <div style={{display: 'inline-flex'}}>
                        <div>
                            <Paper style={{width: 800, marginBottom: 50}}>
                    <ExpansionPanel style={{width:800}}>
                        <ExpansionPanelSummary expandIcon={<Icon className="fa fa-sort-desc" aria-hidden="true"/>}>
                            <Typography>{"For Individual"}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelSummary >
                            {   
                                 this.renderMultiCheck1()
                                
                            }
                           
                        </ExpansionPanelSummary>
                    </ExpansionPanel>

                    <ExpansionPanel style={{width:800}}>
                        <ExpansionPanelSummary expandIcon={<Icon className="fa fa-sort-desc" aria-hidden="true"/>}>
                            <Typography>{"For business"}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelSummary>
                            <div>
                            {
                                this.renderMultiCheck()
                            }
                            </div>
                        </ExpansionPanelSummary>
                    </ExpansionPanel>
                </Paper>
                </div>
                </div><br/>
                <Button disabled={this.state.activeStep === 0} onClick={this.handleBack} 
                        style={{marginRight:30}} variant="outlined"
                    >Back</Button>
                    <Button onClick={this.handleReset} 
                        variant="outlined" 
                        color="secondary" 
                        style={{marginRight:30}}>Reset Form
                    </Button>
                    <Button onClick={this.createOrganization} 
                        variant="outlined" 
                        color="primary">Create your Provider Account
                    </Button>
                </Paper>
            )
        }
        if (this.state.activeStep === 2) {
            return (
                <Paper style={{ height: 500 }}>
                    <h4>Enter your Organization Services</h4>
                    <Paper className={this.classes.root}>
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="secondary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="Select your service Type" />
                            <Tab label="Select your Expertise" />
                        </Tabs>
                    </Paper>
                    {
                        this.state.value !== 1 ?
                        <div style={{ display: 'inline-flex', marginBottom: 50 }}>
                        <div>
                            
                                {
                                    this.state.showAlert ? <Alert severity="warning">Cannot delete. Atleast one expertise required</Alert> : null
                                }
                                
                                <br/>
                                <br/>
                                    <Autocomplete
                                        multiple
                                        id="checkboxes-tags-demo"
                                        value={this.state.selectedServices}
                                        options={this.state.servivesList}
                                        disableCloseOnSelect
                                        getOptionLabel={(option) => option}
                                        onChange={(event, value) => this.handleSelectedservices(event, value)}
                                        renderOption={(option, { selected }) => (
                                            <React.Fragment>
                                                <Checkbox
                                                    icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                                    checkedIcon={<CheckBoxIcon fontSize="small" />}
                                                    style={{ marginRight: 8 }}
                                                    checked={selected}
                                                />
                                                {option}
                                            </React.Fragment>
                                        )}
                                        style={{ width: 600 }}
                                        renderInput={(params) => (
                                            <TextField {...params} variant="outlined" label="Select your service Type" placeholder="services" />
                                        )}
                                    />
                        </div>
                        <br/><br/>
                    </div>: <div style={{ display: 'inline-flex', marginBottom: 50 }}>
                        <div>
                            <br/>
                            <br/>
                            <Autocomplete
                                multiple
                                id="checkboxes-tags-demo"
                                value={this.state.OrgExpertise}
                                options={this.state.expertise}
                                disableCloseOnSelect
                                getOptionLabel={(option) => option.name}
                                onChange={(event, value) => this.handleSelectedexpertise(event, value)}
                                renderOption={(option, { selected }) => (
                                    <React.Fragment>
                                        <Checkbox
                                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                                            style={{ marginRight: 8 }}
                                            checked={selected}
                                        />
                                        {option.name}
                                    </React.Fragment>
                                )}
                                style={{ width: 600 }}
                                renderInput={(params) => (
                                    <TextField {...params} variant="outlined" label="Please Select your Expertise" placeholder="Expertise" />
                                )}
                            />
                        
                        </div>
                    </div>
                    }
                    <br/>
                   <br />
                    <Button
                        disabled={this.state.activeStep === 0}
                        onClick={this.handleBack} style={{ marginRight: 30 }}
                        variant="outlined"
                    >
                        Back
                    </Button>
                    <Button variant="outlined" color="primary" onClick={this.handleNext} style={{ marginRight: 30 }}>
                        {this.state.activeStep === this.state.steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </Paper>
            )
        } if (this.state.activeStep === 0) {
            return (
                <Paper style={{ marginLeft: 150, height: 500 }}>
                    <h4>Please provide your personal details</h4>
                    <Container maxWidth="sm" style={{ marginBottom: 30 }}>
                        <form noValidate autoCapitalize="off">
                            <TextField
                                id="firstName"
                                label="Please enter your first Name"
                                fullWidth
                                type="text"
                                required
                                name="firstName"
                                error={this.state.errors.firstName}
                                helperText={this.state.errors.firstName}
                                autoFocus
                                onChange={(e) => this.change(e)}
                                value={this.state.firstName}
                            />
                            <TextField
                                id="lastName"
                                label="Please enter your last Name"
                                fullWidth
                                type="text"
                                required
                                name="lastName"
                                error={this.state.errors.lastName}
                                helperText={this.state.errors.lastName}
                                onChange={(e) => this.change(e)}
                                value={this.state.lastName}
                            />
                            <TextField
                                id="email"
                                label="Please enter your Email Address"
                                fullWidth
                                type="email"
                                required
                                name="email"
                                error={this.state.errors.email}
                                helperText={this.state.errors.email}
                                onChange={(e) => this.change(e)}
                                value={this.state.email}
                            />
                            <TextField
                                id="password"
                                label="Please enter your password"
                                fullWidth
                                type="password"
                                required
                                name="password"
                                error={this.state.errors.password}
                                helperText={this.state.errors.password}
                                onChange={(e) => this.change(e)}
                                value={this.state.password}
                            />
                            <TextField
                                id="confirmPassword"
                                label="Please re-enter your password"
                                fullWidth
                                type="password"
                                required
                                name="confirmPassword"
                                error={this.state.errors.confirmPassword}
                                helperText={this.state.errors.confirmPassword}
                                onChange={(e) => this.change(e)}
                                value={this.state.confirmPassword}
                            />
                            <Grid item xs={4} style={{ display: 'flex' }}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-sßelect"
                                    value={this.state.country_code}
                                    style={{ minWidth: 150 }}
                                >
                                    {
                                        (this.state.countries && this.state.countries.length) ? this.state.countries.map((item, index) => {
                                            return <MenuItem key={index} value={item.dial_code} onClick={(e) => this.handleAccessCode(e)}>{item.dial_code}</MenuItem>
                                        }) : <span>Loading</span>
                                    }
                                </Select>
                                <TextField
                                    id="phone_number"
                                    label="Enter your Phone number"
                                    name="phoneNumber"
                                    fullWidth
                                    type="number"
                                    error={this.state.errors.phoneNumber}
                                    helperText={this.state.errors.phoneNumber}
                                    autoFocus
                                    required
                                    style={{ minWidth: 400 }}
                                    onChange={(e) => this.change(e)}
                                    value={this.state.phoneNumber}
                                />
                            </Grid>
                        </form>
                    </Container>
                    <Button
                        disabled={this.state.activeStep === 0}
                        onClick={this.handleBack} style={{ marginRight: 30 }}
                        variant="outlined"
                    >
                        Back
                    </Button>
                    <Button variant="outlined" color="primary" onClick={this.handleNext} style={{ marginRight: 30 }}>
                        {this.state.activeStep === this.state.steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </Paper>
            )
        } if (this.state.activeStep === 1) {
            return (
                <Paper >
                    <h4>Please provide your Organization Details</h4>
                    <Container maxWidth="sm" style={{ marginBottom: 50 }}>
                        <form noValidate autoCapitalize="off">
                            <TextField
                                fullWidth
                                type="text"
                                required
                                label="Enter your Organization Name (As per goverment fillings)"
                                id="OrgName"
                                name="OrgName"
                                error={this.state.errors.OrgName}
                                helperText={this.state.errors.OrgName}
                                autoFocus
                                onChange={(e) => this.change(e)}
                                value={this.state.OrgName}
                            />
                            <TextField
                                fullWidth
                                label="Enter your Organization Address"
                                type="text"
                                required
                                id="OrgAddress"
                                name="OrgAddress"
                                error={this.state.errors.OrgAddress}
                                helperText={this.state.errors.OrgAddress}
                                onChange={(e) => this.change(e)}
                                value={this.state.OrgAddress}
                            />
                            <TextField
                                fullWidth
                                label="Enter your Fees"
                                type="text"
                                required
                                id="Fees"
                                name="Fees"
                                onChange={(e) => this.change(e)}
                                value={this.state.Fees}
                            />
                            
                            <div>
                                <div>
                                    <Select id="countriesLabel"
                                labelId="demo-simple-select-label"
                                style={{ minWidth: 550 }}
                                value={this.state.OrgCountry}
                            >
                                {
                                    (this.state.countries && this.state.countries.length) ? this.state.countries.map((item, index) => {
                                        return <MenuItem key={index} value={item.name} onClick={(e) => this.handleCountrySelect(e)}>{item.name}</MenuItem>
                                    }) : <span>Loading...</span>
                                }
                            </Select>

                                </div>
                                <div>
                                <Select id="citiesLabel"
                                labelId="demo-simple-select-label"
                                
                                style={{ minWidth: 550 }}
                                value={this.state.OrgCity}
                            >
                                         
                                {
                                    (this.state.importedCity && this.state.importedCity.length) ? this.state.importedCity.map((item, index) => {
                                        return <MenuItem key={index} value={item.name} onClick={(e) => this.handleCitySelect(e)}>{item.name}</MenuItem>
                                    }) : <span>Loading...</span>
                                }
                            </Select>

                                </div>
                            </div>
                             <TextField
                                fullWidth
                                label="Address Line 1"
                                type="text"
                                required
                                id="ALine1"
                                name="ALine1"
                                onChange={(e) => this.change(e)}
                                value={this.state.ALine1}
                            /> 
                             <TextField
                                fullWidth
                                label="Address Line 2"
                                type="text"
                                required
                                id="ALine2"
                                name="ALine2"
                                onChange={(e) => this.change(e)}
                                value={this.state.ALine2}
                            /> 
                            <TextField
                                fullWidth
                                label="Please Enter Your PinCode"
                                type="text"
                                required
                                id="PinCode"
                                name="PinCode"
                                onChange={(e) => this.change(e)}
                                value={this.state.PinCode}
                            /> 
                            <TextField
                                fullWidth
                                label="Enter your Organization Registation Number"
                                type="text"
                                required
                                id="OrgRegNumber"
                                name="OrgRegNumber"
                                error={this.state.errors.OrgRegNumber}
                                helperText={this.state.errors.OrgRegNumber}
                                onChange={(e) => this.change(e)}
                                value={this.state.OrgRegNumber}
                            />
                            <TextField
                                fullWidth
                                label="Enter type of registation"
                                type="text"
                                required
                                name="OrgPINType"
                                error={this.state.errors.OrgPINType}
                                helperText={this.state.errors.OrgPINType}
                                onChange={(e) => this.change(e)}
                                style={{ marginBottom: 40 }}
                                value={this.state.OrgPINType}
                            />
                            <Grid item xs={4} style={{ display: 'flex' }}>
                                <label>Provide Your Profile Picture</label>
                                <input
                                    accept="image/*"
                                    id="raised-button-file"
                                    multiple
                                    type="file"
                                    onChange={(e) => { this.name(e) }}
                                />
                            </Grid>
                        </form>
                    </Container>
                    <Button
                        disabled={this.state.activeStep === 0}
                        onClick={this.handleBack}
                        style={{ marginRight: 30 }}
                        variant="outlined"
                    >
                        Back
                </Button>
                    <Button variant="outlined" color="primary" onClick={this.handleNext} style={{ marginRight: 30 }}>
                        {this.state.activeStep === this.state.steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </Paper>
            )
        }
    }

    render() {
        return (
            <div>
                <HeaderContainer />
                <Paper className="stepperShrink">
                    <Stepper activeStep={this.state.activeStep} alternativeLabel elevation={0}>
                        {
                            this.state.steps.map((items, index) => {
                                return (
                                    <Step key={items}>
                                        <StepLabel>{items}</StepLabel>
                                    </Step>
                                )
                            })
                        }
                    </Stepper>
                </Paper>
                <div className="shrink">
                    {
                        this.getStepperContent()
                    }
                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.open}
                    autoHideDuration={5000}
                    onClose={(e, r) => this.handleClose(e, r)}
                    message={this.state.errorMessage}
                    action={
                        <React.Fragment>
                            <Button color="secondary" size="small" onClick={(e, r) => this.handleClose(e, r)}>
                                Hide
                            </Button>
                        </React.Fragment>
                    }
                />
            </div>
        )
    }
}