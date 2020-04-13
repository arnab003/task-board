import React, { Component } from 'react';

class Card extends Component {
  state = {
    editing: false,
    content: ''
  }

  onSubmit(event) {
    event.preventDefault();
    const updatedContent = this.textInput.value.trim();
    const columnId = this.props.columnId;
    if (updatedContent && this.props.updateCardContent) {
      this.props.updateCardContent(updatedContent, columnId, this.props.card.id);
      this.setEditing(false);
    }
    this.textInput.value = '';
  }

  deleteTask = () => {
    this.props.deleteTask(this.props.card.id, this.props.columnId);
  }

  setEditing(editing, content) {
    this.setState({
      editing,
      content
    });
  }

  setCardDimention = () => {
    let el = this.elem,
      dim;
    if (el) {
      dim = el.getBoundingClientRect();
      this.props.setCardDimention(this.props.card.id, dim);
    }
  }

  componentDidMount() {
    this.setCardDimention();
  }

  componentDidUpdate() {
    this.setCardDimention();
  }

  render() {
    const { card, handleCardDragStart } = this.props;
    if (this.state.editing) {
      return (
        <div>
          <form className="task-card add-task-form" onSubmit={(e) => this.onSubmit(e)}>
            <input type="text" autoFocus ref={input => this.textInput = input} defaultValue={this.state.content} />
            <div>
              <button className="waves-effect waves-light btn confirm-btn add-update-button ">Update</button>
              <button className="waves-effect waves-light btn confirm-btn cancel-button red darken-1" onClick={() => this.setEditing(false)}>Cancel</button>
            </div>
          </form>
        </div>
      );
    }
    return (
      <div>
        <div className="task-card z-depth-2" onClick={(e) => this.setEditing(true, e.target.innerHTML)}
          ref={elem => this.elem = elem}
          draggable="true"
          id={card.id}
          onDragStart={handleCardDragStart}
        >
          {card.content}
        </div>
        <div onClick={this.deleteTask}><a href="/" className="del-task" title="Delete Task"><i className="small material-icons">delete_forever</i></a></div>
      </div>
    );
  }
}

export default Card;
