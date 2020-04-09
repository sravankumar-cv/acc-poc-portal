import React from 'react';
import {Row,Col} from "react-bootstrap";
import {Container} from "react-bootstrap";
import ImgMediaCard from "./cards/cards.js";
import RecipeReviewCard from "./cards/sampleCards";
export default  class Homepage extends React.Component{
  render() {
    return (
      <React.Fragment>
      <h1>this is the landing page</h1>
      <Container>
        <Row>
          <Col>
              <ImgMediaCard/>
          </Col>
          <Col>
              <ImgMediaCard/>
          </Col>
          {/* <Col>
              <ImgMediaCard/>
          </Col> */}
         
        </Row>
            
            
       </Container> 
       </React.Fragment>
     
     
    );
  };
};