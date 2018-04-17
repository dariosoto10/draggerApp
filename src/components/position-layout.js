import React from 'react';
import '../App.css';
import { Label } from 'react-bootstrap';

function position(props) {
  const deltaPosition  = {...props};

  return (
    <div>
      <h3 className="label-position">
        Current Position
        <br />
        X<Label className="x-label">{deltaPosition.x.toFixed(0)}</Label>
        Y<Label className="y-label">{deltaPosition.y.toFixed(0)}</Label>
      </h3>
    </div>
  )
}

export default position;