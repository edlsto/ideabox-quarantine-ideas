import React from "react";
import "./Idea.css";
import { deleteIdea } from "../../actions";
import { connect } from "react-redux";

const Idea = ({ title, description, id, deleteIdea }) => {
  console.log(id);
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
      <button onClick={() => deleteIdea(id)}>Delete</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteIdea: (id) => dispatch(deleteIdea(id)),
});

export default connect(null, mapDispatchToProps)(Idea);
