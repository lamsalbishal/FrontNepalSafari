import React, { Component } from 'react';
import {Container,Row,Col,InputGroup,FormControl,Button} from 'react-bootstrap';
export default class Signup extends Component {
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
      
        fetch('signup/addusers', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        
        body:JSON.stringify({
          fullname: this.state.fields.fullname,
          username: this.state.fields.username,
          password:this.state.fields.password,
          email:this.state.fields.email,
          address : this.state.fields.address,
          phone : this.state.fields.phone,
          birthday : this.state.fields.birthday,
          gender : this.state.fields.gender,
          choose: this.state.fields.choose
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
                      <InputGroup.Text id="basic-addon1">FullName</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      name="fullname"
                      value={this.state.fields.fullname}
                      onChange={this.handleChange}
                      placeholder="Fullname"
                      aria-label="fullname"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">UserName</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      name="username"
                      value={this.state.fields.username}
                      onChange={this.handleChange}
                      placeholder="UserName"
                      aria-label="username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      name="password"
                      value={this.state.fields.password}
                      onChange={this.handleChange}
                      placeholder="Password"
                      aria-label="password"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

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
                      <InputGroup.Text id="basic-addon1">Address</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      name="address"
                      value={this.state.fields.address}
                      onChange={this.handleChange}
                      placeholder="address"
                      aria-label="address"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Phone</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      name="phone"
                      value={this.state.fields.phone}
                      onChange={this.handleChange}
                      placeholder="Phone No"
                      aria-label="phone"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Birthday</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      name="Birthday"
                      value={this.state.fields.birthday}
                      onChange={this.handleChange}
                      placeholder="birthday"
                      aria-label="birthday"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Gender</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      name="gender"
                      value={this.state.fields.gender}
                      onChange={this.handleChange}
                      placeholder="gender"
                      aria-label="gender"
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

                  
                 


                    <Button type="submit" value="Register" variant="primary">Sign up</Button>
                    
                    </form>
                   
                     

                    </div>

                </Col>
               
            </Row>
            </Container>
        
      </div>
    );
  }
}


