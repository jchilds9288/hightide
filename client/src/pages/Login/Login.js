import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
// import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
// import flogo from "../../imgs/flogo.png"
// import gplus from "../../imgs/google-plus.png"
import { GoogleLogin } from 'react-google-login';

import config from "../../config.json"
import "./Login.css"


class Login extends Component {
    
    state = {
        isAuthenticated: false,
        user: null,
        token: ""
      };
    
    //   constructor() {
    //     super();
    //     this.state = { isAuthenticated: false, user: null, token: ''};
    // }
    
    logout = () => {
        this.setState({isAuthenticated: false, token: '', user:    null})
    };

    onFailure = (error) => {
        alert(error);
    };

    
    googleResponse = (response) => {
        console.log(response)
        const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
        const options = {
            method: 'POST',
            body: tokenBlob,
            mode: 'cors',
            cache: 'default'
        };
        fetch('/api/users/auth/google', options).then(r => {
            const token = r.headers.get('x-auth-token');
            r.json().then(user => {
                if (token) {
                    this.setState({isAuthenticated: true, user, token})
                }
            });
        })
       
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        })
        // .then(console.log("handlechange"));
      };
      
    //   handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.email && this.state.password) {
    //       API.getUser({
    //         // _id: "5b4ff5cfa7c14e4d348ad836",
    //       })
    //         .then(res => this.loadUserTasks())
    //         .catch(err => console.log(err))
    //     }
    //   };
    
    render() {
        let content = !!this.state.isAuthenticated ?
                (

                    <Redirect to="/users/:id" />
                    // <div>
                    //     <p>Authenticated</p>
                    //     <div>
                    //         {this.state.user.email}
                    //         {this.state.user.score}
                    //     </div>
                    //     <div>
                    //         <button onClick={this.logout} className="button">
                    //             Log out
                    //         </button>
                    //     </div>
                    // </div>
                ) :
                (
                    <div>
                        <GoogleLogin
                            clientId={config.GOOGLE_CLIENT_ID}
                            buttonText="Login"
                            onSuccess={this.googleResponse}
                            onFailure={this.onFailure}
                        />
                    </div>
                );
    
            return (
               
                <div className="App">
                    {content}
                </div>
                
                  
                
            );
        }
    }
    

        
        
        
        
        
                // return(
            // <Container fluid>
            //     <Row>
            //         <Col size="md-12">    
            //             <h3>Username</h3>
            //         </Col>
            //         <Col size="md-5">
            //         <form>
            //             <Input
            //                 value={this.state.email}
            //                 onChange={this.handleInputChange}
            //                 name="email"
            //                 placeholder="Enter Username"
            //             />
            //         </form>   
            //         </Col>
            //         <Col size="md-12">    
            //             <h3>Password</h3>
            //         </Col>
            //         <Col size="md-5">
            //         <form>
            //             <Input
            //                 value={this.state.password}
            //                 onChange={this.handleInputChange}
            //                 name="password"
            //                 placeholder="Enter Password"
            //             />
            //         </form>   
            //         </Col>
            //         <Col size="md-12">
            //             <form>
            //                 <FormBtn
            //                     disabled={!(this.state.author && this.state.title)}
            //                     onClick={this.handleFormSubmit}
            //                 >
            //                     <a href="list" className="btn-success " role="button">Login</a>
            //                 </FormBtn>
            //             </form>
            //         </Col>
            //     </Row>
            //     <Col size="md-6">
            //         <Row>
            //             <Col size = "md-12">
            //                 <h3>Sign Up Options</h3>
            //             </Col>
            //             <Col size = "md-6">
            //             <a href='#'><img src= {flogo} className="f-logo" alt="flogo"></img></a>
            //             </Col>
            //             <Col size = "md-6">
            //             <a href='/google'><img src= {gplus} className="google-logo" alt="Google + Logo"></img></a>
            //             </Col>
            //             <Col size = "md-6">
                            // <div className="App">
                            //     {content}
                            // </div>
            //             </Col>
            //         </Row>
            //     </Col>
            // </Container>
       

export default Login;