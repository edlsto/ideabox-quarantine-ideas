import React, { Component } from "react";
import "./App.css";
import Form from "../Form/Form";
import IdeasContainer from "../IdeasContainer/IdeasContainer";

class App extends Component {
  render() {
    return (
      <main>
        <div className="title">
          <h1>
            Things to do during quarantine
            <span role="img" aria-label="sick person">
              😷
            </span>
          </h1>
        </div>
        <Form />
        <IdeasContainer />
      </main>
    );
  }
}

export default App;
