import React, { Component } from 'react';
import '../App.css';
import Board from '../components/board-layout';
import Position from '../components/position-layout';
import { Col, Row } from 'react-bootstrap'

class Dragger extends Component {
  constructor(props){
    super(props)
    this.state = {
      activeDrags: 0,      
      deltaPosition: {
        x: 0, y: 0
      }
    }
  }

  onStart = () => {
    this.setState({activeDrags: this.state.activeDrags + 1});
  }

  onStop = () => {
    this.setState({activeDrags: this.state.activeDrags - 1});
  }

  handleDrag = (e, ui) => {
    const {x, y} = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      }
    });
  }

  render() {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};

    return (
      <div className="App">
       <Row>
       <Col xs={12}>
          <Col xs={7}>
            <Board {...dragHandlers}  onDrag={this.handleDrag} />
          </Col>
          <Col xs={5}>
            <Position {...this.state.deltaPosition} />
          </Col>
        </Col>
        </Row>
      </div>
    );
  }
}

export default Dragger;
