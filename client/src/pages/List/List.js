import React, {Component} from  "react";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { InputLarge, FormBtn, Option } from "../../components/Form";
import { ScoreBoard, Achievements } from "../../components/ScoreBoard";
import voyageImg from "../../imgs/voyage_1.png"


class List extends Component {
    state = {
        task: {},
        points: 0,
    }

    componentDidMount() {
        this.loadTasks();
        const userId = sessionStorage.getItem('userId');
        const score = sessionStorage.getItem('score');
        console.log(userId)
        console.log(score)
        // API.getUser(this.props.match.params.id)
        //   .then(res => this.setState({task: res.data, points: res.data }))
        //   .catch(err => console.log(err));
      }

    // loadUserData = (id) => {
    //     API.getUserData(id)
    //     .then(res =>
    //     this.setState({users: res.data}))
    //     .catch(err => console.log(err));
    // }

    loadTasks = () => {
        API.getTasks()
        .then(res => this.setState({tasks: res.data, task: "", points:""})
    )
        .then(console.log("shoule be loading tasks"))
        .catch(err => console.log(err))
      
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        })
        // .then(console.log("handlechange"));
      };

    handleTaskSubmit = event => {
        event.preventDefault();
        if (this.state.task){
            API.saveTask({
                task: this.state.task,
                points: this.state.points,
            })
            .then(console.log("saved task"))
            .catch(err => console.log(err));
    
        }
    
    
      }

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
                            <p>{sessionStorage.getItem('score')}</p>
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
                       
                    </Col>
                    <Col size="md-5">
                        <form >
                            <InputLarge
                                value={this.state.task}
                                onChange={this.handleInputChange}
                                name="task"
                                placeholder="Add a task!"
                            />
                        </form> 
                    </Col>
                    <Col size="md-1">
                        <form >
                            <InputLarge
                                value={this.state.points}
                                onChange={this.handleInputChange}
                                name="points"
                                placeholder="Points"
                            />
                        </form> 
                        
                        {/* <form >
                            <select className="form-control form-control-lg">
                                <Option   
                                value={this.state.points}
                                onChange={this.handleInputChange}
                                name="points">
                                    1
                                </Option>
                                <Option 
                                value={this.state.points}
                                onChange={this.handleInputChange}
                                name="points">
                                    3
                                </Option>
                                <Option 
                                value={this.state.points}
                                onChange={this.handleInputChange}
                                name="points">
                                    5
                                </Option> */}
                                
                                {/* <option>
                                    1
                                    <Input
                                        value={1}
                                        onChange={this.handleInputChange}
                                        name="points"
                                        placeholder="Add a task!"
                                    />
                                </option> 
                                <option>
                                    3
                                     <Input
                                        value={3}
                                        onChange={this.handleInputChange}
                                        name="points"
                                        placeholder="Add a task!"
                                    />
                                </option>
                                <option>
                                    5
                                     <Input
                                        value= {5}
                                        onChange={this.handleInputChange}
                                        name="points"
                                        placeholder="Add a task!"
                                    /> 
                                </option> */}
                            {/* </select>
                        </form>  */}
                    </Col>
                    <Col size="md-1">
                        <form>
                            <FormBtn
                                disabled={!(this.state.task)}
                                onClick={this.handleTaskSubmit}
                            >
                                Add Task!
                            </FormBtn>
                        </form>
                    </Col>
                </Row>
            </Container>
        )
        }
    }

export default List;