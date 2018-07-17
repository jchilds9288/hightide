import React, {Component} from  "react";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";

class Login extends Component {
return(){
    return(
        <Container fluid>
            <Row>
                <Col size="md-12">    
                    <h3>Username</h3>
                </Col>
                <Col size="md-12">
                <form>
                    <Input
                        // value={this.state.title}
                        // onChange={this.handleInputChange}
                        name="UserName-Login"
                        placeholder="Enter Username"
                    />
                </form>   
                </Col>
                <Col size="md-12">    
                    <h3>Password</h3>
                </Col>
                <Col size="md-12">
                <form>
                    <Input
                        // value={this.state.title}
                        // onChange={this.handleInputChange}
                        name="Password-Login"
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
                            Sign Up!
                        </FormBtn>
                    </form>
                </Col>
            </Row>
        </Container>
    )
    }
}

export default Login;