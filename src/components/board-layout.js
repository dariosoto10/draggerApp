import React from 'react';
import Draggable from 'react-draggable';
import '../App.css';
import './board-layout.css'

function board(props) {
  const dragHandlers = {...props};

  return (
    <div className="box">
      <div className="box-auxiliary">
        <Draggable bounds="parent" {...dragHandlers}>
          <div className="box-child">
            <p className="drag-text">
              Drag me
            </p>
          </div>
        </Draggable>
      </div>
    </div>
  )
}

export default board;