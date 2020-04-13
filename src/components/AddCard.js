import React, { Component } from 'react';

export default class AddCard extends Component {
  state = {
    editing: false
  }

  onSubmit(event) {
    event.preventDefault();
    const cardContent = this.textInput.value.trim();
    const columnId = this.props.columnId;
    if (cardContent && this.props.addNewCard) {
      this.props.addNewCard(cardContent, columnId);
      this.setEditing(false);
    }
    this.textInput.value = '';
  }

  setEditing(editing) {
    this.setState({
      editing
    });
  }

  render() {
    if (!this.state.editing) {
      return (
        <div onClick={() => this.setEditing(true)}>
          <a className="waves-effect waves-light btn-small light-green darken-2"><i className="material-icons left">add</i>Add Task</a>
        </div>
      );
    }
    return (
      <div>
        <form className="task-card add-task-form" onSubmit={(e) => this.onSubmit(e)}>
          <input type="text" autoFocus ref={input => this.textInput = input} aria-label="Add a task" />
          <div>
            <button className="waves-effect waves-light btn confirm-btn add-update-button ">Add Task</button>
            <button className="waves-effect waves-light btn confirm-btn cancel-button red darken-1" onClick={() => this.setEditing(false)}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}