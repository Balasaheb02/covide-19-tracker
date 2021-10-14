import React from "react";
import "./cards.css";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div>
      <div className="cards">
        <div className="card card-1">
          <h2 title={props.title} className="card__title">
            {props.title}
          </h2>
          <p className="card__apply">
            <a className="card__link">Deaths : {props.death}</a>
          </p>
          <p className="card__apply">
            <a className="card__link">Active : {props.active}</a>
          </p>
          <p className="card__apply">
            <a className="card__link">Delta Variant Deaths : {props.delta}</a>
          </p>
          <p className="card__apply">
            <a className="card__link">Recovered : {props.recovered}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  death: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  delta: PropTypes.string.isRequired,
  recovered: PropTypes.string.isRequired,
};

export default Card;
