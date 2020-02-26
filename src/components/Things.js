import React from "react";
import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";

const Things = ({ things }) => {
  const [ref, inView, entry] = useInView({
    threshold: 0,
    triggerOnce: true
  });
  return (
    <section className={`content-grid u-border-bottom`}>
      <div className="content-grid__item content-grid__item--top content-grid__item--bg-peach">
        <div className="content-grid__text">
          <h3>{things.dotitle}</h3>
          <ul className={`${inView ? "is-visible" : ""}`}>
            {things.do.map(item => (
              <li ref={ref} key={item.text}>
                <i className={`icon icon--circle`} />
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="content-grid__item content-grid__item--top content-grid__item--bg-dark-gray">
        <div className="content-grid__text">
          <h3>{things.donttitle}</h3>
          <ul>
            {things.dont.map(item => (
              <li key={item.text}>
                <i className="icon icon--times" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

Things.propTypes = {
  things: PropTypes.object
};

export default Things;
