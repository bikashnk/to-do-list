import React, { Component } from 'react';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoHeader from './ToDoHeader.jsx'
import UserProfile from './UserProfile.jsx';
import ListDetails from './ListDetails.jsx';
import '../style/TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: [],
      result: {},
    }
  }
  setPlayerMode = list => {
    this.setState({ players: list });
  }
  getResult = result => {
    this.setState({ result });
  }
  resetState = confirm => {
    if (confirm === "Playagain") {
      this.setState({ result: {} });
    } else {
      this.setState({
        players: [],
        result: {},
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <ToDoHeader />
        <div className="container" style={{ marginTop: '1em' }}>
          <div className="row">
            <div className="col-lg-4">
              <UserProfile />
            </div>
            <div className="col-lg-8">
              <ListDetails/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default TodoList;