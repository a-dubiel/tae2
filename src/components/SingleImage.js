import React from "react";
import PropTypes from "prop-types";

const SingleImage = ({ data }) => (
  <div className="single-image u-border-bottom">
    <img
      src="https://unsplash.it/1000"
      data-src="https://unsplash.it/1000x200"
      className="lazyload"
      alt="couple"
    />
  </div>
  // 2WkN$Ye*G0
);

SingleImage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array
    })
  )
};

export default SingleImage;
