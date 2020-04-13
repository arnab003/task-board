import React from 'react';
import Card from './Card';
import AddCard from './AddCard';

const Column = (props) => {
  const cards = props.cards.map((card, index) => {
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
      <h5 className="name-header">{props.column}</h5>
      <hr />
      <ul className="list">
        {cards}
        <li className="add-list-wrapper">
          <AddCard columnId={props.id} addNewCard={props.addNewCard} />
        </li>
      </ul>
    </div>
  );
};

export default Column;