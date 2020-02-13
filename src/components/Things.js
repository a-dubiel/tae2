import React from "react";
import PropTypes from "prop-types";

const Things = ({ data }) => (
  <section className="content-grid u-border-bottom">
    <div className="content-grid__item content-grid__item--bg-peach">
      <div className="content-grid__text">
        <h3>Things I happily do</h3>
        <ul>
          <li>
            <i className="icon icon--circle" />
            Confirm the # of alternative milk drink choices  with your bartender
            a week before
          </li>
          <li>
            <i className="icon icon--circle" />
            Double Check that the DJ knows not to play the  Macrena no matter
            how many times your uncle  requests it
          </li>
          <li>
            <i className="icon icon--circle" />
            Find an extra chair to squeeze into that last table because your
            cousin decided to bring her new boyfriend at the last minute
          </li>
          <li>
            <i className="icon icon--circle" />
            Get your groomsman’s pants delivered to the venue asap because he
            brought the wrong ones
          </li>
          <li>
            <i className="icon icon--circle" />
            Run the wedding schedule like a military officer
          </li>
        </ul>
      </div>
    </div>
    <div className="content-grid__item content-grid__item--bg-dark-gray">
      <div className="content-grid__text">
        <h3>Things I don't do</h3>
        <ul>
          <li>
            <i className="icon icon--times" />
            Create a mood board and pull samples of every  kind of black lace
            for your gothic-themed wedding
          </li>
          <li>
            <i className="icon icon--times" />
            Consult in decor or design choices for your ice  sculpture
          </li>
          <li>
            <i className="icon icon--times" />
            Book or pick actual vendors that will marry you while you’re
            paragliding off Poo Poo Point
          </li>
          <li>
            <i className="icon icon--times" />
            Participate in any sort of DIY, Etsy-inspired art project for
            centerpiece (trust me, you’ll thank me for this in the long run)
          </li>
          <li>
            <i className="icon icon--times" />
            Create bonsai-inspired floral arrangements the night before
          </li>
        </ul>
      </div>
    </div>
  </section>
);

Things.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array
    })
  )
};

export default Things;
