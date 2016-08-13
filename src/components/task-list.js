import React from 'react';
import Task from './task.js';

class TaskList extends React.Component {
  render() {
    return (
      <ul>
        { this.props.tasks.map((task) => <Task key={ task } text={ task } />) }
      </ul>
    );
  }
}

export default TaskList;
