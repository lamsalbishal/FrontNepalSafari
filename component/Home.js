import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
class Home extends Component {
  render() {
    
    return (
      <div className="About">
        
        <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col xs={12} md={8}>
                Below you will find some information on how to perform common tasks.
                    You can find the most recent version of this guide here.
                </Col>
                <Col xs={6} md={4}>
                Below you will find some information on how to perform common tasks.
                    You can find the most recent version of this guide here.
                </Col>
            </Row>

            
            </Container>;
        
      </div>
    );
  }
}

export default Home;

