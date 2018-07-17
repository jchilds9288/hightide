import React, {Component} from  "react";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import flogo from "../../imgs/flogo.png"
import gplus from "../../imgs/google-plus.png"


class SignUp extends Component {

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
                                    // value={this.state.title}
                                    // onChange={this.handleInputChange}
                                    name="First Name"
                                    placeholder="First Name (required)"
                                />
                            </form>  
                        </Col>
                        <Col size="md-6">
                            <form>   
                                <Input
                                    // value={this.state.author}
                                    // onChange={this.handleInputChange}
                                    name="Last Name"
                                    placeholder="Last Name (required)"
                                />
                            </form>    
                        </Col>
                        <Col size="md-12">
                            <form>   
                                <Input
                                    // value={this.state.author}
                                    // onChange={this.handleInputChange}
                                    name="Address"
                                    placeholder="Address (required)"
                                />
                            </form>    
                        </Col>
                        <Col size="md-12">
                            <form>   
                                <Input
                                    // value={this.state.author}
                                    // onChange={this.handleInputChange}
                                    name="Address 2"
                                    placeholder="Apartment, Studio, or Floor"
                                />
                            </form>    
                        </Col>
                        <Col size="md-6">
                            <form>   
                                <Input
                                    // value={this.state.author}
                                    // onChange={this.handleInputChange}
                                    name="City"
                                    placeholder="City (required)"
                                />
                            </form>    
                        </Col>
                        <Col size="md-4">
                            <form>   
                                <Input
                                    // value={this.state.author}
                                    // onChange={this.handleInputChange}
                                    name="State"
                                    placeholder="State (required)"
                                />
                            </form>    
                        </Col>
                        <Col size="md-2">
                            <form>   
                                <Input
                                    // value={this.state.author}
                                    // onChange={this.handleInputChange}
                                    name="Zip"
                                    placeholder="Zip (req)"
                                />
                            </form>    
                        </Col>
                        <Col size="md-12">
                            <form>   
                                <h3> Username </h3>
                                <Input
                                    // value={this.state.author}
                                    // onChange={this.handleInputChange}
                                    name="Email"
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
                                    // value={this.state.author}
                                    // onChange={this.handleInputChange}
                                    name="Password"
                                    placeholder="Password"
                                />
                            </form>    
                        </Col>
                        <Col size="md-6">
                            <form>   
                                <Input
                                    // value={this.state.author}
                                    // onChange={this.handleInputChange}
                                    name="Password-2"
                                    placeholder="Re-enter Password"
                                />
                            </form>    
                        </Col>
                        <Col size="md-12">
                            <form>
                                <FormBtn
                                    // disabled={!(this.state.author && this.state.title)}
                                    // onClick={this.handleFormSubmit}
                                >
                                    Sign Up!
                                </FormBtn>
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