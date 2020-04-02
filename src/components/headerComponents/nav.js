import React from "react";
import "./nav.css";
//import "react-bootstrap/Modal";
import {Link} from "react-router-dom";
import {DropdownButton,Dropdown} from "react-bootstrap";
import {Badge} from "@material-ui/core";
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
//import {NotificationIcon} from "@material-ui/core/Badge"
import NotificationIcon from '@material-ui/icons/Notifications'
import Modal from '../demo/modal';
import LoginForm from "../login-form/login-form";
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Container,Row} from 'react-bootstrap'
class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            isShowing:false,
            show:false
        }
    }
    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }
    handleOnDropdown= (temp)=>{
        
    }

    render() {
        return (
            <React.Fragment>
            { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
    <Container fluid>
        
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">POC</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <button className="btn btn-success" onClick={this.openModalHandler} style={{marginRight:"4rem"}}>Login</button>
      <NavDropdown title="More" id="basic-nav-dropdown" style={{marginRight:"8rem"}}>
      <Dropdown.Item>
    <Link to= "/" style={{textDecoration:'none' , color:'black'}}>Notification</Link>
    </Dropdown.Item>
      <NavDropdown.Divider />
    <Dropdown.Item>
        <Link to= "/registerPartner" style={{textDecoration:'none' , color:'black'}}>Become A Partner</Link>
        </Dropdown.Item>

      </NavDropdown>
      
    </Nav>
    <Badge badgeContent={4} onClick={(event)=>{
        console.log('clicked the notification pane');
    }} color="primary" style={{cursor:"pointer",marginRight:"4rem"}}><NotificationIcon /></Badge>
  </Navbar.Collapse>
</Navbar>
        
    </Container>
  
            <Modal
                className="modal"
                show={this.state.isShowing}
                close={this.closeModalHandler}>
                    {/* Maybe aircrafts fly very high because they don't want to be seen in plane sight? */}
                    <LoginForm/>
            </Modal>
            </React.Fragment>
        )

    }
}

export default NavBar;