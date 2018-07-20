import React, {Component} from  "react";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, InputLarge, FormBtn } from "../../components/Form";
import { ScoreBoard, Achievements } from "../../components/ScoreBoard";
import VoyageScene from "../../components/VoyageScene";
import voyageImg from "../../imgs/voyage_1.png"


class List extends Component {
    state = {
        task: "",
        points: 0,
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
                        <h1 className="listTitle">VOYAGE CHART!</h1>
                    </Col>
                    <Col size="md-4">    
                        <h1 className="scoreTitle">% of Daily Voyage Completed</h1>
                        <ScoreBoard>
                            <p>68%</p>
                        </ScoreBoard>
                    </Col>
                    <Col size="md-4">    
                        <h1 className="scoreTitle"> Captain Points Awarded from Sister Ship</h1>
                        <ScoreBoard>
                            <p>18</p>
                        </ScoreBoard>
                    </Col>
                    <Col size="md-4">
                        <Row>
                            <Col size="md-12">
                                <h3 className="achievementTitle"> Total Captain Points Earned</h3>
                                <Achievements>
                                    <p>786</p>
                                </Achievements>
                            </Col>
                            <Col size="md-12">
                                <h3 className="achievementTitle"> Consecutive Completed Deliveries!</h3>
                                <Achievements>
                                    <p>5</p>
                                </Achievements>
                            </Col>
                        </Row>
                    </Col>
                    <Col size="md-12">
                        <img src= {voyageImg} className="voyageImg" alt="voyage"></img>
                        {/* <VoyageScene>
                        </VoyageScene> */}
                    </Col>
                    <Col size="md-5">
                        <form >
                            <InputLarge
                                // value={this.state.task}
                                // onChange={this.handleInputChange}
                                name="task"
                                placeholder="Add a task!"
                            />
                        </form> 
                    </Col>
                    <Col size="md-1">
                        <form >
                            <select className="form-control form-control-lg">
                                <option>
                                    1
                                    <Input
                                        // value={this.state.task}
                                        // onChange={this.handleInputChange}
                                        name="task"
                                        placeholder="Add a task!"
                                    />
                                </option>
                                <option>
                                    3
                                    <Input
                                        // value={this.state.task}
                                        // onChange={this.handleInputChange}
                                        name="task"
                                        placeholder="Add a task!"
                                    />
                                </option>
                                <option>
                                    5
                                    <Input
                                        // value={this.state.task}
                                        // onChange={this.handleInputChange}
                                        name="task"
                                        placeholder="Add a task!"
                                    />
                                </option>
                            </select>
                        </form> 
                    </Col>
                </Row>
            </Container>
        )
        }
    }

export default List;