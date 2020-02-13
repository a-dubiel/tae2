import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const About = ({ content }) => (
  <section className="content-grid content-grid--reverse-mobile u-border-bottom">
    <div className="content-grid__item">
      <div className="content-grid__text">dadsddsadsdsa</div>
    </div>

    <div className="content-grid__item">
      <div className="content-grid__title">
        <h2>
          <span className="top">What I can</span>
          <span className="bottom">do for you</span>
        </h2>
      </div>
      <div className="content-grid__img">
        {/* <Img
          fluid={content.whatimage.childImageSharp.fluid}
          alt={"wedding photo"}
        /> */}
      </div>
    </div>
  </section>
);

About.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      whatcontent: PropTypes.string,
      whatimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    })
  )
};

export default About;
