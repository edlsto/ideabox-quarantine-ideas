import React, { Component } from "react";
import "./Form.css";
import { connect } from "react-redux";
import { addIdea } from "../../actions";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.addIdea({
      title: this.state.title,
      description: this.state.description,
    });
    this.setState({ title: "", description: "" });
  }

  render() {
    return (
      <form>
        <h2>What's your idea?</h2>
        <div className="input-container">
          <input
            type="text"
            className="input-title"
            placeholder="idea"
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="text"
            className="input-description"
            placeholder="description"
            name="description"
            value={this.state.description}
            onChange={(e) => this.handleChange(e)}
          />
          <button
            className="submit-btn"
            type="button"
            onClick={(e) => this.handleClick(e)}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addIdea: (idea) => dispatch(addIdea(idea)),
});

export default connect(null, mapDispatchToProps)(Form);
