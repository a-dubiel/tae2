import React from "react";
import PropTypes from "prop-types";

const SingleImage = ({ image }) => (
  <div className="single-image u-border-bottom">
    <img
      sizes={`${image.childImageSharp.fluid.sizes}`}
      src={`${image.childImageSharp.fluid.src}`}
      srcSet={`${image.childImageSharp.fluid.srcSet}`}
      alt={"couple"}
    />
  </div>
);

SingleImage.propTypes = {
  image: PropTypes.object
};

export default SingleImage;
