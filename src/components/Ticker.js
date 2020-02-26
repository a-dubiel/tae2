import React from "react";
import PropTypes from "prop-types";

const Ticker = ({ ticker }) => (
  <div className="ticker u-border-bottom">
    <div className="ticker__wrap">
      <div className="ticker__content">
        <p className="ticker__title">
          {ticker} {ticker} {ticker} {ticker} {ticker} {ticker} {ticker}{" "}
          {ticker} {ticker} {ticker} {ticker} {ticker} {ticker} {ticker}{" "}
          {ticker} {ticker} {ticker} {ticker} {ticker} {ticker} {ticker}{" "}
          {ticker} {ticker} {ticker} {ticker} {ticker} {ticker} {ticker}{" "}
        </p>
      </div>
    </div>
  </div>
);

Ticker.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      ticker: PropTypes.string
    })
  )
};

export default Ticker;
