import React, { Component } from "react";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberCount: 1,
      name: "Valisher",
    };
  }
  changeName = () => {
    this.setState({ numberCount: this.state.numberCount + 1 });
  };

  handleEvent = () => {
    this.setState({ numberCount: this.state.numberCount + 2 });
    this.setState({ name: "Valisher Botirov" });
  };
  render() {
    const { numberCount } = this.state;
    return (
      <div>
        <p>This is class components {this.state.name}</p>
        <p>numberCount : {numberCount}</p>
        <button onClick={this.changeName}>Class Button</button>
        <button onClick={this.handleEvent}>Handle Event</button>
      </div>
    );
  }
}

export default Person;
