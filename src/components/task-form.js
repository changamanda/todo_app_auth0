import React from 'react';

class TaskForm extends React.Component {
  _handleSubmit(event){
    event.preventDefault;
    var task = this.refs.input.value;
    this.props.addTask(task);
    this.refs.input.value = '';
  }
  render() {
    return (
      <div>
        <h2>Add Task</h2>
        <form onSubmit={ this._handleSubmit.bind(this) }>
          <input ref='input' type='text' />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default TaskForm;
