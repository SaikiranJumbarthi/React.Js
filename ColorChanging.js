import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }
  //   handleClick() {
  //     this.setState({ count: this.state.count - 1 });
  //   }
  //   decreaseClick() {
  //     this.setState({ count: this.state.count - 1 });
  //   }

  render() {
    return (
      <div
        style={{ backgroundColor: `#${Math.random().toString().slice(-6)}` }}
      >
        <h1 style={{ backgroundColor: "red" }}>Saikiran Jumbarthi</h1>
        <p>Count:{this.state.count}</p>
        <button
          style={{ background: `#${Math.random().toString().slice(-6)} ` }}
          onClick={() => {
            this.handleClick();
          }}
        >
          Increment
        </button>
        <br />
        <br />
        {/* <p>CounttoDecrease:{this.state.count} </p>
        <button onClick={() => this.decreaseClick()}>Decrement</button> */}
      </div>
    );
  }
}

export default MyComponent;
