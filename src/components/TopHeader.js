import React from "react";
import PropTypes from "prop-types";

const TopHeader = ({ data }) => (
  <header className="header">
    <div className="header__logo u-border-bottom">
      <div className="wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1219.65 120.09">
          <title>Type-A-Events</title>
          <defs>
            <clipPath id="clip-path">
              <path d="M-47.85 830.17h-1279.66v-185H-47.85z" />
            </clipPath>
          </defs>
          <path d="M-47.85 830.17h-1279.66v-185H-47.85z" />
          <g clipPath="url(#clip-path)">
            <path d="M-932.61 92.17l4.29-4.29 962 962-4.29 4.29zM-893.68 53.23l4.29-4.29L72.66 1011l-4.29 4.29zM-859.43 19l4.29-4.29 962.05 962.03-4.29 4.26zM-825.18-15.27l4.29-4.29 962.05 962.05-4.29 4.29zM-786.24-54.21l4.29-4.29 962 962.05-4.29 4.29zM-752-88.46l4.29-4.29 962 962.05-4.29 4.29z" />
          </g>
          <path d="M0 14.99h38.22v102.63H51.4V14.99h38.21V2.31H0v12.68zM146.94 59.14L110.86 2.31H95.87l44.48 70.17v45.14h13.18V72.48l44.81-70.17h-15.33l-36.07 56.83zM257.8 2.31H209v115.31h13.18V68.2h35.62c22.24 0 34.59-13.84 34.59-32.95 0-18.78-12.39-32.94-34.59-32.94zm-.49 53.37h-35.09V15h35.09c14.49 0 21.91 8.07 21.91 20.26 0 12.35-7.42 20.42-21.91 20.42zM306.72 117.62h78.74v-12.68H319.9V64.91h58.81V52.39H319.9v-37.4h65.56V2.31h-78.74v115.31zM621.52 117.62h78.74v-12.68H634.7V64.91h58.81V52.39H634.7v-37.4h65.56V2.31h-78.74v115.31zM763.35 102.47L725.3 2.31h-14.5l44.32 115.31h16.3L815.9 2.31h-14.5l-38.05 100.16zM826.6 117.62h78.75v-12.68h-65.57V64.91h58.81V52.39h-58.81v-37.4h65.57V2.31H826.6v115.31zM1006.33 99L939.11 2.31h-17.13v115.31h13.18l.33-97.85 67.87 97.85h16.14V2.31h-13.17V99zM1034.65 14.99h38.22v102.63h13.18V14.99h38.22V2.31h-89.62v12.68zM1176 50.08c-19.6-2-28-8.24-28-19.77 0-10.38 10.71-17.63 26-17.63 14.66 0 26 10.05 29.32 25.37l12.85-4.44C1211.74 13.34 1195.1 0 1174 0c-22.9 0-39.54 12.68-39.54 30.48 0 19.27 12.85 30 38.22 32.61 23.06 2.47 33.44 9.56 33.44 21.25 0 13.84-11.37 23.07-30 23.07-19.28 0-33.28-12.85-36.41-33.77l-13 3.78c4.28 26 23.23 42.67 49.42 42.67 26 0 43.49-14.33 43.49-35.75.03-20.42-14.62-31.34-43.62-34.26zM452.43 52.41h-55.4V64.7h55.36l.04-12.29zM548.92 64.7h57.36V52.41h-57.62l.26 12.29zM493.08 2.32l-47.27 115.3h14.33L474 83.52l5.11-12.68 2.49-6.14h38.36l2.47 6.14 5.1 12.68 13.84 34.1h14.5L508.56 2.32zm-6.51 50.09l14.25-35.1L515 52.41z" />
        </svg>
      </div>
    </div>
    <div className="main-slider js-main-slider">
      <div className="main-slider__slide">
        <div className="main-slider__item u-border-bottom">
          <div
            className="main-slider__photo"
            style={{ backgroundImage: "url(http://unsplash.it/800/600)" }}
          />
          <div className="main-slider__content">
            <div className="main-slider__text">
              <button className="main-slider__button button--next js-main-slider-next">
                Next
              </button>
              <h1 className="main-slider__title">
                Day of Wedding Coordination for the bride who deosn't want to
                lift a finger.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="main-slider__slide">
        <div className="main-slider__item u-border-bottom">
          <div
            className="main-slider__photo"
            style={{ backgroundImage: "url(http://unsplash.it/800/600)" }}
          />
          <div className="main-slider__content">
            <div className="main-slider__text">
              <button className="main-slider__button button--next js-main-slider-next">
                Next
              </button>
              <h3 className="main-slider__title">Lorem ipsum dolor amet.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="stripes u-border-bottom" />
  </header>
);

TopHeader.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array
    })
  )
};

export default TopHeader;
