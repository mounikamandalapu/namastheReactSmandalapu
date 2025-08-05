import React from "react";

//React Class Component
class Counter extends React.Component {
  constructor() {
    super();
    this.state = { count: 0, disableIncree: false, disableDecree: true };
  }

  increement = () => {
    this.setState((prevState) => {
      const newCount = prevState.count + 1;
      return {
        count: newCount,
        disableIncree: newCount >= 10,
        disableDecree: newCount <= 0,
      };
    });
  };

  decreement = () => {
    this.setState((prevState) => {
      const newCount = prevState.count - 1;
      return {
        count: newCount,
        disableIncree: newCount >= 10,
        disableDecree: newCount <= 0,
      };
    });
  };

  render() {
    return (
      <>
        <button onClick={this.increement} disabled={this.state.disableIncree}>
          Increement by 1
        </button>
        <button onClick={this.decreement} disabled={this.state.disableDecree}>
          Decreement by 1
        </button>
        <div>{this.state.count}</div>
      </>
    );
  }
}

export default Counter;
