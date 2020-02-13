import React from "react";
import PropTypes from "prop-types";

const Things = ({ things }) => (
  <section className="content-grid u-border-bottom">
    <div className="content-grid__item content-grid__item--bg-peach">
      <div className="content-grid__text">
        <h3>{things.dotitle}</h3>
        <ul>
          {things.do.map(item => (
            <li key={item.text}>
              <i className="icon icon--circle" />
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="content-grid__item content-grid__item--bg-dark-gray">
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

Things.propTypes = {
  things: PropTypes.object
};

export default Things;
