import React, {Component} from  "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import flogo from "../../imgs/flogo.png"
import gplus from "../../imgs/google-plus.png"


class SignUp extends Component {
 
    state = {
    firstName: "",
    lastName: "",
    address: "",
    address2: "",
    city: "",
    state:"",
    zip: "",
    email: "",
    password: "",
    score: 0,
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
    // .then(console.log("handlechange"));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName && this.state.address && this.state.city && this.state.state && this.state.zip && this.state.email && this.state.password){
        API.saveUser({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            email: this.state.email,
            password: this.state.password,
            date: new Date(Date.now())
        })  
        .then(response=> {
            const { data } = response;
            sessionStorage.setItem('userId', data._id);
            this.props.history.push('/list')
        })
        
        .catch(err => console.log(err))


    }

  }

 

    render() {
        return (
          <Container fluid>
            <Row>
                <Col size="md-6">
                    <Row>
                        <Col size = "md-12">
                            <h3>Sign Up Options</h3>
                        </Col>
                        <Col size = "md-6">
                        <a href='#'><img src= {flogo} className="f-logo" alt="flogo"></img></a>
                        </Col>
                        <Col size = "md-6">
                        <a href='#'><img src= {gplus} className="google-logo" alt="Google + Logo"></img></a>
                        </Col>
                    </Row>
                </Col>
                <Col size="md-6">

                    <Row>
                        <Col size="md-12">    
                        <h3>General Info</h3>
                        </Col>
                        <Col size="md-6">
                            <form>
                                <Input
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange}
                                    name="firstName"
                                    placeholder="First Name (required)"
                                />
                            </form>  
                        </Col>
                        <Col size="md-6">
                            <form>   
                                <Input
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange}
                                    name="lastName"
                                    placeholder="Last Name (required)"
                                />
                            </form>    
                        </Col>
                        <Col size="md-12">
                            <form>   
                                <Input
                                    value={this.state.address}
                                    onChange={this.handleInputChange}
                                    name="address"
                                    placeholder="Address (required)"
                                />
                            </form>    
                        </Col>
                        <Col size="md-12">
                            <form>   
                                <Input
                                    value={this.state.address2}
                                    onChange={this.handleInputChange}
                                    name="address2"
                                    placeholder="Apartment, Studio, or Floor"
                                />
                            </form>    
                        </Col>
                        <Col size="md-6">
                            <form>   
                                <Input
                                    value={this.state.city}
                                    onChange={this.handleInputChange}
                                    name="city"
                                    placeholder="City (required)"
                                />
                            </form>    
                        </Col>
                        <Col size="md-4">
                            <form>   
                                <Input
                                    value={this.state.state}
                                    onChange={this.handleInputChange}
                                    name="state"
                                    placeholder="State (required)"
                                />
                            </form>    
                        </Col>
                        <Col size="md-2">
                            <form>   
                                <Input
                                    value={this.state.zip}
                                    onChange={this.handleInputChange}
                                    name="zip"
                                    placeholder="Zip (req)"
                                />
                            </form>    
                        </Col>
                        <Col size="md-12">
                            <form>   
                                <h3> Username </h3>
                                <Input
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                    name="email"
                                    placeholder="Email Adress (required)"
                                />
                            </form>    
                        </Col>
                        <Col size="md-12">
                            <h3>Password</h3>   
                        </Col>
                        <Col size="md-6">
                            <form>   
                                <Input
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    name="password"
                                    placeholder="Password"
                                />
                            </form>    
                        </Col>
                        {/* <Col size="md-6">
                            <form>   
                                <Input
                                    // value={this.state.author}
                                    // onChange={this.handleInputChange}
                                    name="Password-2"
                                    placeholder="Re-enter Password"
                                />
                            </form>    
                        </Col> */}
                        <Col size="md-12">
                    
                            <form>   
                                    <FormBtn 
                                         disabled={!(this.state.firstName && this.state.lastName && this.state.address && this.state.city && this.state.state && this.state.zip && this.state.email && this.state.password)}
                                         onClick={this.handleFormSubmit}
                                        >
                                        
                                        Sign Up!
                                    
                                    </FormBtn>
                                 
                                {/* <Link to="/list" role="button" className="btn btn-link btn-success" 
                                    disabled={!(this.state.firstName && this.state.lastName && this.state.address && this.state.city && this.state.state && this.state.zip && this.state.email && this.state.password)}
                                    onClick={this.handleFormSubmit}>
                                    Sign In 
                                </Link>   */}
                            </form>
                        </Col>
                    </Row>    
                </Col>
            </Row>
          </Container>
        );
      }
    }
      export default SignUp;