import React from "react";

class MouseTracker extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 0 };
    }
  
    handleMouseMove(event) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }
  
    render() {
      return (
        <div onMouseMove={this.handleMouseMove} className="divver">
          <h1>Move the mouse around!</h1>
          <h4>The current mouse position is ({this.state.x}, {this.state.y})</h4>
        </div>
      );
    }
  }

  export default MouseTracker;