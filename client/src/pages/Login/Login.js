import React, {Component} from  "react";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";

class Login extends Component {
    
    state = {
        email: "",
        password: "",
      }
    
    
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        })
        // .then(console.log("handlechange"));
      };
    
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col size="md-12">    
                        <h3>Username</h3>
                    </Col>
                    <Col size="md-5">
                    <form>
                        <Input
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email"
                            placeholder="Enter Username"
                        />
                    </form>   
                    </Col>
                    <Col size="md-12">    
                        <h3>Password</h3>
                    </Col>
                    <Col size="md-5">
                    <form>
                        <Input
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="password"
                            placeholder="Enter Password"
                        />
                    </form>   
                    </Col>
                    <Col size="md-12">
                        <form>
                            <FormBtn
                                // disabled={!(this.state.author && this.state.title)}
                                // onClick={this.handleFormSubmit}
                            >
                                <a href="list" className="btn-success " role="button">Login</a>
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
        }
    }

export default Login;