import React, { Component } from 'react';
import {Container,Row,Col,InputGroup,FormControl,Button,FormGroup,FormLabel} from 'react-bootstrap';
export default class PackagePage extends Component {
  constructor(){
    super();
   

    this.state = {
      users: [],
      isLoading: true,
      error: null,
      fields: {},
      errors: {},
    }

    

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
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


  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  

  }

  submitForm(e) {
    e.preventDefault();
      
        fetch('package/addpackage', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          title: this.state.fields.title,
          description: this.state.fields.description,
          image:this.state.fields.image,
          homeID:this.state.fields.homeID,
        })
      });
  }



  

  render() {
    
    return (
      <div className="About">
        
       {/* {console.log(this.state.users)} */}
        <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col xs={12} md={12}>

                <div>
                  
                  <form method="post" onSubmit= {this.submitForm}>
                    
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      name="title"
                      value={this.state.fields.title}
                      onChange={this.handleChange}
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                   

                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      name="description"
                      value={this.state.fields.description}
                      onChange={this.handleChange}
                      placeholder="Description"
                      aria-label="Description"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Image Url</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      name="image"
                      value={this.state.fields.image}
                      onChange={this.handleChange}
                      placeholder="Image url"
                      aria-label="imageUrl"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                 

                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Home Id</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl 
                     name="homeID"
                     as="select"
                     value={this.state.fields.homeID}
                     onChange={this.handleChange}
                     >
                      {this.state.users.map((userDetail,index) => {
                          return <option value={userDetail._id}>{userDetail.title}</option>
                          })}
                     
                    </FormControl>
                  </InputGroup>


                    <Button type="submit" value="Register" variant="primary">Submit</Button>
                    
                    </form>
                   
                     

                    </div>

                </Col>
               
            </Row>
            </Container>
        
      </div>
    );
  }
}


