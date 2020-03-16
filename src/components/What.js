import React from "react";
import PropTypes from "prop-types";
import { Remarkable } from "remarkable";

const What = ({ data }) => {
  const md = new Remarkable();
  return (
    <section
      id="services"
      className="content-grid content-grid--reverse-mobile u-border-bottom"
    >
      <div className="content-grid__item">
        <div
          className="content-grid__text"
          dangerouslySetInnerHTML={{ __html: md.render(data.content) }}
        />
      </div>

      <div className="content-grid__item">
        <div className="content-grid__title">
          <h2>
            <span>What I can</span>
            <span>do for you</span>
          </h2>
        </div>
        <div className="content-grid__img u-border-bottom-mobile">
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
};

What.propTypes = {
  data: PropTypes.object
};

export default What;
