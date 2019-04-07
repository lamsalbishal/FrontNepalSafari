import React, { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';
class Home extends Component {
  
  constructor(){
    super();
    this.state = {
      users: [],
      isLoading: true,
      error: null
    }
  }


  fetchUsers() {
    // Where we're fetching data from
    fetch('/allhome')
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          users: data,
          isLoading: false,
        })
        
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));

      
  }

  componentDidMount() {

    this.fetchUsers();
  }
  
  render() {
    return (
      <div className="Home">
          {console.log(this.state.users)}
        <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col xs={12} md={8}>
                Change the underlying component CSS base class name and modifier class names prefix. This is an escape hatch for working with heavily customized bootstrap css.
                </Col>
                <Col xs={6} md={4}>
                Allow the Container to fill all of it's availble horizontal space.Allow the Container to fill all of it's availble horizontal space.
                </Col>
            </Row>
        </Container>;
        
      </div>
    );
  }
}

export default Home;
