import React from 'react';
import TaskList from './task-list.js';
import TaskForm from './task-form.js';

class TaskContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {tasks: []};
  }
  componentWillMount(){
    var self = this;
    $.ajax({
      url: '/user/todos'
    })
    .done(function(response){
      self.setState({tasks: response});
    })
  }
  _addTask(task){
    var self = this;
    $.ajax({
      url: '/user/todos',
      method: 'POST',
      data: { text: task }
    })
    .done(function(response){
      var tasks = self.state.tasks;
      tasks.push(task);
      self.setState({tasks: tasks});
    })
  }
  render() {
    return (
      <div>
        <TaskForm addTask={ this._addTask.bind(this) } />
        <TaskList tasks={ this.state.tasks } />
      </div>
    );
  }
}

export default TaskContainer;
