import React from "react";
import './cards.css'

const Card = (props) => {
  return (
    <div>
      <div class="cards">
        <div class="card card-1">
          <h2 title={props.title} class="card__title">
            {props.title}
          </h2>
          <p class="card__apply">
            <a class="card__link">
              Deaths : {props.death}
            </a>
          </p>
          <p class="card__apply">
            <a class="card__link">
              Active : {props.active}
            </a>
          </p>
          <p class="card__apply">
            <a class="card__link">
              Delta Variant Deaths : {props.delta}
            </a>
          </p>
          <p class="card__apply">
            <a class="card__link">
              Recovered : {props.recovered}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
