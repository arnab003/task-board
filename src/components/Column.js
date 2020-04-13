import React from 'react';
import Card from './Card';
import AddCard from './AddCard';

const Column = (props) => {
  const cards = props.cards && props.cards.map((card, index) => {
    return (
      <li key={index}>
        <Card card={card}
          columnId={props.id}
          updateCardContent={props.updateCardContent}
          setCardDimention={props.setCardDimention}
          handleCardDragStart={props.handleCardDragStart}
          deleteTask={props.deleteTask}
        />
      </li>
    );
  });

  return (
    <div>
      <ul className="list">
        <li>
          <div>
            <div className="column-header"><h5 className="name-header">{props.column}</h5></div>
            <div className="column-header-del"><a className="del-task" title="Delete List" onClick={props.deleteColumn}><i className="material-icons">close</i></a></div>
          </div>
        </li>
        <li>
          <div className="partition"></div>
        </li>
        {cards}
        <li className="add-list-wrapper">
          <AddCard columnId={props.id} addNewCard={props.addNewCard} />
        </li>
      </ul>
    </div>
  );
};

export default Column;