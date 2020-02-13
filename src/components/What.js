import React from "react";
import PropTypes from "prop-types";

const What = ({ data }) => (
  <section className="content-grid content-grid--reverse-mobile u-border-bottom">
    <div className="content-grid__item">
      <div className="content-grid__text">{data.content}</div>
    </div>

    <div className="content-grid__item">
      <div className="content-grid__title">
        <h2>
          <span className="top">What I can</span>
          <span className="bottom">do for you</span>
        </h2>
      </div>
      <div className="content-grid__img">
        <img
          sizes={`${data.image.childImageSharp.fluid.sizes}`}
          src={`${data.image.childImageSharp.fluid.src}`}
          srcSet={`${data.image.childImageSharp.fluid.srcSet}`}
          alt={"wedding"}
        />
      </div>
    </div>
  </section>
);

What.propTypes = {
  data: PropTypes.object
};

export default What;
