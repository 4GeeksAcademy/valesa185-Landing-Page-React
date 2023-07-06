import React from "react";
import PropTypes from "prop-types";

//Style button Card
const buttonStyles = {
  margin: "1rem",
};

const Card = (props) => {
  return (
    <div className="col">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="card p-0" style={{ width: "18rem" }}>
          <img
            src={props.imageUrl}
            className="card-img-top custom-img"
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <button
              style={buttonStyles}
              type="button"
              className="btn btn-warning"
            >
              {props.buttonLabel}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
  buttonLabel: PropTypes.string,
};

export default Card;
