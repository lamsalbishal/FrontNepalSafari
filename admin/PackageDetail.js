import React, { Component } from 'react';
import {Container,Row,Col,InputGroup,FormControl,Button} from 'react-bootstrap';
export default class PackageDetail extends Component {
  constructor(){
    super();
   

    this.state = {
      package: [],
      isLoading: true,
      error: null,
      fields: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  
  fetchPackage() {
    // Where we're fetching data from
    fetch('package/allpackage')
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          package: data,
          isLoading: false,
        })
        
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));

      
  }

  componentDidMount() {

    this.fetchPackage();
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
      
        fetch('packagedetail/addpackagedetail', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          price: this.state.fields.price,
          priceDetail: this.state.fields.priceDetail,
          overview:this.state.fields.overview,
          packageID:this.state.fields.packageID,
        })
      });
  }



  

  render() {
    
    return (
      <div className="About">
        {console.log(this.state.package)}
        <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col xs={12} md={12}>

                <div>
                  
                  <form method="post" onSubmit= {this.submitForm}>
                    
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Price</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      name="price"
                      value={this.state.fields.price}
                      onChange={this.handleChange}
                      placeholder="price"
                      aria-label="price"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                   

                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Price Detail</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      name="priceDetail"
                      value={this.state.fields.priceDetail}
                      onChange={this.handleChange}
                      placeholder="priceDetail"
                      aria-label="priceDetail"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">OverView</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      name="overview"
                      value={this.state.fields.overview}
                      onChange={this.handleChange}
                      placeholder="Overview"
                      aria-label="overview"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>

                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="basic-addon1">Package Id</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl 
                     name="packageID"
                     value={this.state.fields.packageID}
                     as="select"
                     value={this.state.fields.homeID}
                     onChange={this.handleChange}
                     >
                      {this.state.package.map((packageDetail,index) => {
                          return <option value={packageDetail._id}>{packageDetail.title}</option>
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


