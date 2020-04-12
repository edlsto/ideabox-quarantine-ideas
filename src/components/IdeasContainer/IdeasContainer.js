import React from "react";
import { connect } from "react-redux";
import Idea from "../Idea/Idea";
import "./IdeasContainer.css";

const IdeasContainer = (props) => {
  const cards = props.ideas.map((idea) => {
    return (
      <Idea
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
      />
    );
  });
  return <div className="ideas-container">{cards}</div>;
};

const mapStateToProps = ({ ideas }) => ({
  ideas,
});

export default connect(mapStateToProps)(IdeasContainer);
