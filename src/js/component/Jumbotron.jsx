import React from "react";
import PropTypes from "prop-types";

//Styles Jumbotron
const mySuperStyles = {
  margin: "2rem",
  backgroundImage:
    "url('https://cafesanantoniousa.com/wp-content/uploads/2020/03/header04_1.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
};

const Jumbotron = (props) => {
  return (
    <div style={mySuperStyles} class="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">{props.titleJum}</h1>
        <p className="col-md-8 fs-4">{props.description}</p>
        <button className="btn btn-light btn-lg" type="button">
          {props.buttonLabel}
        </button>
      </div>
    </div>
  );
};

Jumbotron.propTypes = {
  titleJum: PropTypes.string,
  description: PropTypes.string,
  buttonLabel: PropTypes.string,
};

export default Jumbotron;
