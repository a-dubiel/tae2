import React from "react";
import propTypes from "prop-types";
import Slider from "react-slick";

export default class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }
  nextSlide() {
    this.sliderOne.slickNext();
    this.sliderTwo.slickNext();
  }
  prevSlide() {
    this.sliderOne.slickPrev();
    this.sliderTwo.slickPrev();
  }
  render() {
    const { testimonials } = this.props;
    const settings = {
      arrows: false,
      speed: 1000,
      autoplay: false,
      slidesToShow: 1
    };

    const settingsTwo = {
      arrows: false,
      speed: 1000,
      autoplay: false,
      slidesToShow: 1,
      fade: true
    };
    return (
      <section id="testimonials" className="content-grid u-border-bottom">
        <div className="content-grid__item">
          <div className="content-grid__title u-show-mobile">
            <h2>
              <span>Kind</span>
              <span>Words</span>
            </h2>
          </div>
          <div className="content-grid__slider-2">
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
              ref={slider => (this.sliderOne = slider)}
              className="photo-slider--testimonials"
              {...settings}
            >
              {testimonials.slider.map(item => (
                <div key={item.image.id} className="photo-slider__item">
                  <img
                    sizes={`${item.image.childImageSharp.fluid.sizes}`}
                    src={`${item.image.childImageSharp.fluid.src}`}
                    srcSet={`${item.image.childImageSharp.fluid.srcSet}`}
                    alt={"couple"}
                    className="photo-slider__img"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="content-grid__item content-grid__item--bg-peach content-grid__item--top">
          <div className="content-grid__title u-hide-mobile">
            <h2>
              <span>Kind</span>
              <span>Words</span>
            </h2>
          </div>
          <div className="content-grid__text content-grid__text--quotes">
            <div className="quote-slider">
              <Slider
                ref={slider => (this.sliderTwo = slider)}
                {...settingsTwo}
                className="quote-slider__instance"
              >
                {testimonials.slider.map(item => (
                  <blockquote key={item.author} className="quote-slider__quote">
                    <p>{item.quote}</p>
                    <cite> &mdash; {item.author}</cite>
                  </blockquote>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Testimonials.propTypes = {
  testimonials: propTypes.object
};
