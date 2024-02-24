import React, { Component } from "react";

class ChildComponent extends Component {
  render() {
    const { stringProp, numberProp } = this.props;
    return (
      <div>
        <p>
          prop from parent: <br /> string {stringProp} <br />
          number {numberProp}
        </p>
      </div>
    );
  }
}

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValueString: "",
      inputValueNumber: 0,
    };
    console.log("constructor called");
  }

  componentDidMount() {
    console.log("component did mount");
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  handleInputChange = (event) => {
    this.setState({ inputValueString: event.target.value });
  };

  handleInputNumberChange = (event) => {
    this.setState({ inputValueNumber: event.target.value });
  };

  handleButtonClick = () => {
    console.log("input value string: ", this.state.inputValueString);
    console.log("input value number: ", this.state.inputValueNumber);
  };

  render() {
    console.log("render method called");
    return (
      <div>
        <form>
          <label>
            Input string:
            <input
              type="text"
              value={this.state.inputValueString}
              onChange={this.handleInputChange}
            />
          </label>

          <br />

          <label>
            Input number:
            <input
              type="number"
              value={this.state.inputValueNumber}
              onChange={this.handleInputNumberChange}
            />
          </label>

          <br />

          <button type="button" onClick={this.handleButtonClick}>
            show value in console
          </button>
        </form>

        <ChildComponent
          stringProp={this.state.inputValueString}
          numberProp={this.state.inputValueNumber}
        />
      </div>
    );
  }
}

export default MyComponent;
