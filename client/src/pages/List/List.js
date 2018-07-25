import React, {Component} from  "react";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import  Card  from "../../components/Card";
import { InputLarge, FormBtn } from "../../components/Form";
import { ScoreBoard, Achievements } from "../../components/ScoreBoard";
import voyageImg from "../../imgs/voyage_1.png"
import boat from "../../imgs/boat.png"
import "./List.css"





class List extends Component {
    state = {
        task: {},
        score:0,
        points: 0,
    }

    componentDidMount() {
        const userId = sessionStorage.getItem('userId');
        const score = sessionStorage.getItem('score');
        API.getUserData(this.props.match.params.id)
        .then(res => this.setState({book:res.data}))
        .catch(err => console.log(err));
    }
    //     this.loadTasks(userId);
    //     console.log(userId)
    //     console.log(score)
    //     API.getUser(this.props.match.params.id)
    //       .then(res => this.setState({task: res.data, points: res.data }))
    //       .catch(err => console.log(err));
    //   }

    // loadUserData = (id) => {
    //     API.findById(id)
    //     .then(res =>
    //     this.setState({users: res.data}))
    //     .catch(err => console.log(err));
    // }

    loadTasks = (userid) => {
        API.getTasks(userid)
        .then(res => this.setState({tasks: res.data, _id: "",task: "", points:""})
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
                            {/* {this.state.user.score} */}
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
                                <p>{sessionStorage.getItem('score')}</p>
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
                        <div>
                            <img src= {voyageImg} className="voyageImg" alt="voyage"></img>
                            <img src= {boat} className="shipList" alt="waves"/>
                       </div>
                    </Col>
                    <Col size="md-12">
                        <h1 className="dailyTaskTitle">DAILY TASKS</h1>
                    </Col>
                    <Col size="md-9">
                        <Card>
                           <Row>
                                <Col size="md-2">
                                </Col>
                                <Col size="md-8">
                                    <h1 className = "taskHeader"> Go out to Lunch with Raffaello</h1>
                                </Col>
                                <Col size="md-2">
                                    <h1 className = "taskPoints"> Points: 5</h1>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col size="md-9">
                        <Card>
                           <Row>
                                <Col size="md-2">
                                </Col>
                                <Col size="md-8">
                                    <h1 className = "taskHeader"> Go for a Run</h1>
                                </Col>
                                <Col size="md-2">
                                    <h1 className = "taskPoints"> Points: 5</h1>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col size="md-9">
                        <Card>
                           <Row>
                                <Col size="md-2">
                                </Col>
                                <Col size="md-8">
                                    <h1 className = "taskHeader"> Read an Academic Geo Paper</h1>
                                </Col>
                                <Col size="md-2">
                                    <h1 className = "taskPoints"> Points: 3</h1>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col size="md-9">
                        <Card>
                           <Row>
                                <Col size="md-2">
                                </Col>
                                <Col size="md-8">
                                    <h1 className = "taskHeader"> NO SUGAR! </h1>
                                </Col>
                                <Col size="md-2">
                                    <h1 className = "taskPoints"> Points: 3</h1>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col size="md-9">
                        <Card>
                           <Row>
                                <Col size="md-2">
                                </Col>
                                <Col size="md-8">
                                    <h1 className = "taskHeader"> Grab Beer with Max</h1>
                                </Col>
                                <Col size="md-2">
                                    <h1 className = "taskPoints"> Points: 1</h1>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                   
                       <div className="addTask">  
                        <Row>
                        <Col size="md-5">
                            <form className="addTaskForm" >
                                <InputLarge
                                    value={this.state.task}
                                    onChange={this.handleInputChange}
                                    name="task"
                                    placeholder="Add a task!"
                                />
                            </form> 
                        </Col>
                        <Col size="md-1">
                            <form className="addTaskPoints" >
                                <InputLarge
                                    value={this.state.points}
                                    onChange={this.handleInputChange}
                                    name="points"
                                    placeholder="Points"
                                />
                            </form> 
                            
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
                    </div>
                </Row>
            </Container>
        )
        }
    }

export default List;