import React, { Component, createRef } from "react";

class ChildComponent extends Component {
  render() {
    const { stringProp } = this.props;
    return (
      <div>
        <p>
          prop from parent: <br /> {stringProp}
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
      isDisabled: false,
    };
    this.inputRef = createRef();
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
    event.target.value === `реакт`
      ? this.setState({ isDisabled: true })
      : this.setState({ isDisabled: false });
  };

  handleButtonClick = () => {
    console.log("input value string: ", this.state.inputValueString);
  };

  handleButtonFocus = () => {
    this.inputRef.current.focus();
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
              ref={this.inputRef}
            />
          </label>

          <br />

          <button
            type="button"
            onClick={this.handleButtonClick}
            disabled={this.state.isDisabled}
          >
            show value in console
          </button>
          <button type="button" onClick={this.handleButtonFocus}>
            focus on input
          </button>
        </form>

        <ChildComponent stringProp={this.state.inputValueString} />
      </div>
    );
  }
}

export default MyComponent;
