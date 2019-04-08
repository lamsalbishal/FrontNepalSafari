import React, { Component } from 'react';
import {Container,Row,Col,InputGroup,FormControl,Button} from 'react-bootstrap';
export default class Book extends Component {
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
      
        fetch('book/addbook', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          email: this.state.fields.email,
          from: this.state.fields.from,
          choose:this.state.fields.choose,
          date:this.state.fields.date,
          userID : this.state.fields.userID,
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
                      <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      name="email"
                      value={this.state.fields.email}
                      onChange={this.handleChange}
                      placeholder="email"
                      aria-label="email"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                   

                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">From</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      name="from"
                      value={this.state.fields.from}
                      onChange={this.handleChange}
                      placeholder="from"
                      aria-label="from"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Choose</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      name="choose"
                      value={this.state.fields.choose}
                      onChange={this.handleChange}
                      placeholder="Choose"
                      aria-label="choose"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Date</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      name="date"
                      value={this.state.fields.date}
                      onChange={this.handleChange}
                      placeholder="date"
                      aria-label="date"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">USer Id</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      name="userID"
                      value={this.state.fields.userID}
                      onChange={this.handleChange}
                      placeholder="User ID"
                      aria-label="userID"
                      aria-describedby="basic-addon1"
                    />
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


