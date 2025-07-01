import { Component } from "react";

class ComponentIntro extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: 0,
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.cartItems}</h1>
        <button
          onClick={() => {
            this.setState({ cartItems: (this.state.cartItems += 1) });
          }}
        >
          add
        </button>
      </div>
    );
  }
}

export default ComponentIntro;
