import React, {Component} from  "react";
import Jumbotron from "../../components/Jumbotron";
import TextWater from "../../components/Text-Water";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";


class Home extends Component {

    render() {
        return (
          <Container fluid>
            <Row>
                <Col size="md-12">
                    <Jumbotron>
                        <h1 className="jumbo-title animated zoomIn">HighTide</h1>
                        <p className= "jumbo-intro"> A Cooperative Task Manager Designed to Make YOU and Those Around You Better!</p>
                    </Jumbotron>
                    <TextWater>
                        <p className="introText"> 
                        Make a game that helps a user accomplish their goals and emphasizes:
                        </p>

                        <ol className="introList">
                            <li>
                                Team work: Corporation and Network
                            </li>
                            <li>
                                Gradual gains: Lots of small wins
                            </li>
                            <li>
                                Customization: Pushing user, but at their own rate and in direction they desire
                            </li>
                            <li>
                                Progress: No matter who you are, there is a desire to “get better” 
                            </li>
                            <li>
                                Success is bigger than Profession: Success can be found in all aspects of your life
                            </li>
                        </ol>
                    </TextWater>    
                </Col>
            </Row>
          </Container>
        );
      }

}

export default Home;