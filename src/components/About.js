import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }
  nextSlide() {
    this.slider.slickNext();
  }
  prevSlide() {
    this.slider.slickPrev();
  }
  render() {
    const { data } = this.props;
    const settings = {
      arrows: false,
      speed: 1000,
      autoplaySpeed: 8000,
      autoplay: true,
      slidesToShow: 1,
      adaptiveHeight: true
    };
    return (
      <section className="content-grid u-border-bottom">
        <div className="content-grid__slider u-border-bottom">
          <div className="content-grid__title">
            <h2>
              <span className="top">About</span>
              <span className="bottom">me</span>
            </h2>
          </div>
          <div className="content-grid__img">
            <button
              onClick={this.nextSlide}
              className="photo-slider__button button--next"
            >
              Next
            </button>
            <button
              onClick={this.prevSlide}
              className="photo-slider__button button--prev"
            >
              Prev
            </button>
            <Slider
              ref={slider => (this.slider = slider)}
              className="photo-slider"
              {...settings}
            >
              {data.slider.map(item => (
                <div key={item.image.id} className="photo-slider__item">
                  <div
                    className="photo-slider__img"
                    style={{
                      backgroundImage: `url(${item.image.childImageSharp.fluid.src})`
                    }}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="content-grid__item u-border-bottom content-grid__item--no-border-r">
          <div className="content-grid__text">
            <p>{data.content}</p>
          </div>
        </div>
        <div className="content-grid__item content-grid__item--bg-light-blue">
          <blockquote className="content-grid__quote">
            <p>"{data.quote}"</p>
          </blockquote>
        </div>
        <div className="content-grid__item content-grid__item--bg-peach">
          <div className="content-grid__heading">
            <p>{data.heading}</p>
          </div>
        </div>
      </section>
    );
  }
}

About.propTypes = {
  data: PropTypes.object
};
