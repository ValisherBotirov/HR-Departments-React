import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      password: "",
    };
  }

  handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // if (name === "fullName") {
    //   this.setState({ fullName: value });
    // }
    this.setState({ [name]: value });
    console.log(name, value);
  };

  render() {
    const { fullName, email, password } = this.state;

    return (
      <div>
        <p>Login form</p>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={this.handleInput}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleInput}
          ></input>
        </div>
        <div>
          <label>Parol</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInput}
          ></input>
        </div>
      </div>
    );
  }
}

export default Form;
