import React ,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Container, Row, Col } from "react-bootstrap";
//import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import "./cards.css";
const useStyles = makeStyles({
    root1: {
        // maxWidth: 400,
    },

});
const useStylesForAvatar = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1)
        }
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    }
}))

const ImgMediaCard = (props) => {
    const classesForCard = useStyles();
    const classesForAvatar = useStylesForAvatar();
    const [data,setData]=useState({});

    // var kebab = document.querySelector('.kebab'),
    //      middle = document.querySelector('.middle'),
    //      cross = document.querySelector('.cross'),
    //      dropdown = document.querySelector('.dropdown');

    //  kebab.addEventListener('click', function() {
    //   middle.classList.toggle('active');
    //   cross.classList.toggle('active');
    //   dropdown.classList.toggle('active');
    // })


    return (
        <Card className={classesForCard.root1}>
            {/* <div class="kebab">
            <figure></figure>
            <figure class="middle"></figure>
            <p class="cross">x</p>
                <figure></figure>
                    <ul class="dropdown">
                        <li><a href="http://www.g.com">Art</a></li>
                        <li><a href="http://www.g.com">Coding</a></li>
                        <li><a href="http://www.g.com">Design</a></li>
                        <li><a href="http://www.g.com">Web Development</a></li>
                    </ul>
        </div> */}
            <div className="card-header">
                <div className={`${classesForAvatar.root} ${"myAvatar"}`}>
                    <Avatar
                        alt="Remy Sharp"
                        src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        // src={props.photo}
                        className={classesForAvatar.large}
                        variant="circle"
                    />
                    <span id="yolojoid">yolojo id</span>

                </div>

            </div>

            <div className="myActionArea">
                <CardActionArea className="cardActionArea">
                    <div className="myCardContent">
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2" align='left'>
                               {props.name}
          </Typography>
                            <Typography gutterBottom variant="h5" component="h2" align='left'>
                                <hr></hr>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="h3" align ='left' >
                                category:{props.category.length >0 ? props.category:"N.A"}
                                </Typography>
                                <br></br>
                                <Typography variant="body2" color="textSecondary" component="h3" align ='left' >  
                                Subcategory:{props.subcategory.length>0 ? props.subcategory:"N.A"}
                                </Typography>
                                <br></br>
                                <Typography variant="body2" color="textSecondary" component="h3" align ='left' >  
                                Role:{props.role}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="h3" align ='left' >  
                                verified:{props.verified ? "True" :"False"}
                                </Typography>
                                
                           
                        </CardContent>
                    </div>

                    <CardActions className="CardAction">
                        <Container fluid>
                            <Row>
                                <Col xs={12} md={{span:6,offset:0}} sm={12} lg={6}>
                                    <Button size="small"
                                        color="primary"
                                        variant="contained"
                                        className="btn btn-block"
                                        id="upload"
                                        startIcon={<CloudUploadIcon />}
                                    >
                                        Upload
                                    </Button>
                                </Col>
                                <Col xs={12} md={{span:6,offset:0}} sm={12} lg={6}>
                                    <Button size="small" 
                                    variant="contained"
                                    className="btn btn-block" 
                                    color="secondary" 
                                    id="about-us"
                                    >
                                        About us...
                                    </Button>
                                </Col>
                            </Row>
                        </Container>


                    </CardActions>

                </CardActionArea>
            </div>




        </Card>
    );
}
export default ImgMediaCard;
