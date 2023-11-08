import React from "react";
// import PropTypes from 'prop-types'
// import './Card.module.css'
// or
import classes from "./Card.module.css";

function Card(props) {
  return (
    // <div className={classes.card}>{props.children}</div>
    // ! notes (CSS)
    // ! combine the css from the own module and css props
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
}

// Card.propTypes = {}

export default Card;
