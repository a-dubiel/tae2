import React from "react";
import PropTypes from "prop-types";

const Stripes = ({ color }) => (
  <div className={`stripes u-border-bottom stripes--${color}`}>
    <div className="stripes__content" />
  </div>
);

Stripes.propTypes = {
  color: PropTypes.string
};

export default Stripes;
