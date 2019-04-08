import React, { Component } from 'react';
import {Container,Row,Col,InputGroup,FormControl,Button} from 'react-bootstrap';
export default class HomeAdmin extends Component {
  constructor(){
    super();
   

    this.state = {
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
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
      
        fetch('/home', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          title: this.state.fields.title,
          description: this.state.fields.description,
          image:this.state.fields.image
        })
      });
  }



  

  render() {
    
    return (
      <div className="About">
        
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


                    <Button type="submit" value="Register" variant="primary">Submit</Button>
                    {/* <input type="submit" className="button"   value="Register"/>
                     */}
                    
                    {/* <InputGroup className="mb-3">
                        <FormControl name="images[]" type="file" multiple onChange={this.handlePhotos}/>
                    </InputGroup> */}
                    </form>
                   
                     

                    </div>

                </Col>
               
            </Row>
            </Container>
        
      </div>
    );
  }
}


