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
                        <h1 className="jumbo-title">HighTide</h1>
                        <p className= "jumbo-intro"> A Cooraparitve Task Manager Designed to Make YOU and those Around You Better!</p>
                    </Jumbotron>
                    <TextWater>
                        <p className="introText"> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et eleifend massa. Aenean ullamcorper est at feugiat luctus. Quisque aliquet aliquet nisi, sed lobortis metus pharetra non. Etiam luctus arcu eros, at blandit est rutrum ac. Suspendisse mauris metus, auctor et est ut, rutrum vulputate nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce mattis sem sed mi dignissim, sed interdum enim finibus. Vivamus sollicitudin mauris eu urna pretium maximus. Vestibulum sit amet leo vulputate, pulvinar felis et, malesuada purus. Mauris orci sem, facilisis non condimentum eget, pulvinar et sem. Phasellus sem mauris, gravida non sem in, blandit maximus lacus. Morbi efficitur erat at mollis pulvinar. Phasellus leo nibh, consequat sed nibh tincidunt, condimentum molestie orci. In eget ullamcorper lectus. 
                        </p>
                    </TextWater>    
                </Col>
            </Row>
          </Container>
        );
      }

}

export default Home;