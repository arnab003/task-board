import React, { Component } from 'react';
import Column from './Column';
import Navbar from './Navbar';

export default class Main extends Component {

  constructor(props) {
    super(props);

    if (localStorage.getItem('tasks')) {
      const tasks = JSON.parse(localStorage.getItem('tasks'));
      this.state = {
        tasks,
        columnEditing: JSON.parse(localStorage.getItem('columnEditing'))
      };
    } else {
      this.state = {
        tasks: [{
          column: 'ToDo',
          id: 0,
          cards: [{
            content: 'Sample Task 1',
            columnId: 0,
            id: 0
          },
          {
            content: 'Sample Task 2',
            columnId: 0,
            id: 1
          }]
        },
        {
          column: 'InProgress',
          id: 1,
          cards: [{
            content: 'Sample Task 3',
            columnId: 1,
            id: 2
          }]
        },
        {
          column: 'Done',
          id: 2,
          cards: [{
            content: 'Sample Task 4',
            columnId: 2,
            id: 3
          }]
        }],
        columnEditing: false
      };
      localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
      localStorage.setItem('dimention', JSON.stringify([]));
      localStorage.setItem('columnEditing', JSON.stringify(false));
    }
  }

  // fetch the array of card ids and their respective dimention from local storage
  getDimention = (cardId) => {
    const dimention = JSON.parse(localStorage.getItem('dimention'));
    let cardFound = false;

    for (var i = 0; i < dimention.length; i++) {
      if (dimention[i].id === cardId) {
        cardFound = true;
        break;
      }
    }
    if (cardFound) {
      return {
        dimentionArr: dimention,
        index: i
      };
    }
  }

  // stores the array of card ids and their respective dimention in local storage
  setCardDimention = (cardId, dim) => {
    var dimentionArr = JSON.parse(localStorage.getItem('dimention'));

    let dimObj = this.getDimention(cardId);

    if (dimObj) {
      dimentionArr = dimObj.dimentionArr;
      dimentionArr[dimObj.index].dimention = dim;
    } else {
      dimentionArr.push({
        id: cardId,
        dimention: dim
      });
    }
    localStorage.setItem('dimention', JSON.stringify(dimentionArr));
  }

  // add new task card
  addNewCard = (content, columnId) => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const newCard = {
      content,
      columnId,
      id: new Date().valueOf()
    }

    tasks[columnId].cards.push(newCard);

    this.setState({
      ...this.state,
      tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // update card content (editable card)
  updateCardContent = (content, columnId, cardId) => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks[columnId].cards.forEach((card) => {
      if (card.id === cardId) {
        card.content = content;
      }
    });
    this.setState({
      ...this.state,
      tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // stores essential info during drag start for inserting cards into proper order
  handleCardDragStart = (e, columnId) => {
    const dimObj = this.getDimention(Number(e.currentTarget.id));
    const diff = e.pageY - dimObj.dimentionArr[dimObj.index].dimention.top;
    const dragInfo = {
      cardId: e.currentTarget.id,
      fromColumn: columnId,
      dragStartPageY: e.pageY,
      diff,
    }
    localStorage.setItem('dragInfo', JSON.stringify(dragInfo));
  }

  handleDragOver = (e) => {
    e.preventDefault();
  }

  // helper function to change the position of an array element
  arraymove = (arr, fromIndex, toIndex) => {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  }

  // drop event handler to place the task card after dropping in the same list or different list
  handleDrop = (e, columnId) => {
    const dragInfo = JSON.parse(localStorage.getItem('dragInfo'));
    const cardY = dragInfo.yVal;
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    const cardsArray = tasks[dragInfo.fromColumn].cards;
    const card = cardsArray.find(card => card.id === Number(dragInfo.cardId));
    const indexOfCard = cardsArray.findIndex(card => card.id === Number(dragInfo.cardId));

    let dimObj, bottom, positionIndex = tasks[columnId].cards.length;
    for (let i = 0; i < tasks[columnId].cards.length; i++) {
      dimObj = this.getDimention(Number(tasks[columnId].cards[i].id));
      bottom = (dimObj.dimentionArr[dimObj.index].dimention.bottom);
      if (bottom > cardY) {
        positionIndex = i;
        break;
      }
    }

    if (columnId === Number(dragInfo.fromColumn)) {
      if (positionIndex !== indexOfCard && positionIndex !== (indexOfCard + 1)) {
        this.arraymove(tasks[dragInfo.fromColumn].cards, indexOfCard, indexOfCard - positionIndex < 0 ? positionIndex - 1 : positionIndex);
      }
    } else {
      tasks[dragInfo.fromColumn].cards.splice(indexOfCard, 1);
      tasks[columnId].cards.splice(positionIndex, 0, { ...card, columnId: Number(columnId) });
    }

    this.setState({
      ...this.state,
      tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.removeItem('dragInfo');
  }

  // tracks the mouse coordinate to help in placing the card tasks in proper order after drop
  handleDragOver = (e) => {
    e.preventDefault();
    const dragInfo = JSON.parse(localStorage.getItem('dragInfo'));
    dragInfo.yVal = e.pageY - dragInfo.diff;
    localStorage.setItem('dragInfo', JSON.stringify(dragInfo));
  }

  // delete a card task
  deleteTask = (cardId, columnId) => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const newCardArr = tasks[columnId].cards.filter((card) => {
      return card.id !== cardId;
    });
    tasks[columnId].cards = newCardArr;
    this.setState({
      ...this.state,
      tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // flag set in state to open form for adding a list
  setEditing(columnEditing) {
    this.setState({
      ...this.state,
      columnEditing
    });
    localStorage.setItem('columnEditing', JSON.stringify(columnEditing));
  }

  // form submit handler for adding a column
  onSubmitListName(event) {
    event.preventDefault();
    const content = this.textInput.value.trim();
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (content) {
      tasks.push({
        column: content,
        id: tasks.length,
        cards: []
      });
    }
    this.setState({
      tasks,
      columnEditing: false
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('columnEditing', JSON.stringify(false));
    this.textInput.value = '';
  }

  render() {
    const tasks = this.state.tasks.map((task, index) => (
      <div className="transparent-wrapper" key={index} onDragOver={this.handleDragOver} onDrop={(e) => this.handleDrop(e, task.id)}>
        <li className="column-wrapper z-depth-3">
          <Column {...task}
            setCardDimention={this.setCardDimention}
            updateCardContent={this.updateCardContent}
            handleCardDragStart={(e) => this.handleCardDragStart(e, task.id)}
            addNewCard={this.addNewCard}
            deleteTask={this.deleteTask}
          />
        </li>
      </div>
    ));

    const addColumn = this.state.columnEditing ? (
      <div>
        <form className="task-card add-column-form" onSubmit={(e) => this.onSubmitListName(e)}>
          <input type="text" autoFocus ref={input => this.textInput = input} aria-label="Add a List" />
          <div>
            <button className="waves-effect waves-light btn confirm-btn add-update-button ">Add List</button>
            <button className="waves-effect waves-light btn confirm-btn cancel-button red darken-1" onClick={() => this.setEditing(false)}>Cancel</button>
          </div>
        </form>
      </div>
    ) : (
        <div onClick={() => this.setEditing(true)}>
          <a className="btn-floating btn waves-effect waves-light light-green darken-2 z-depth-2"><i className="material-icons">add</i></a>
        </div>
      );


    return (
      <div>
        <Navbar />
        <div onDragOver={this.handleDragOver}>
          <div className="wrapper-cont">
            <ul className="task-column">
              {tasks}
              <li className="column-wrapper add-column">
                {addColumn}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};
