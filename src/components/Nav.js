import React from "react";
import { Link } from "gatsby";

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]', {});
}

const Nav = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav className="nav" role="navigation" aria-label="Main Navigation">
        <div className="nav__content">
          <div
            role="button"
            className={`nav__burger ${this.state.navBarActiveClass}`}
            onClick={() => this.toggleHamburger()}
          >
            <span />
            <span />
            <span />
          </div>

          <a className="nav__logo-mobile" href="/#">
            <svg
              className="nav__logo"
              viewBox="0 0 383 116"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit={2}
            >
              <path
                d="M382.956-.012v12.75h-65.909v37.591h59.121v12.584h-59.12v40.241h65.908v12.75h-79.154V-.012h79.154zM90.08-.012v12.75H51.665v103.166h-13.25V12.738H-.007V-.012h90.088z"
                fill="#fff"
                fillRule="nonzero"
              />
              <path
                fill="#fff"
                d="M133.822 50.32h-55.65v12.355h55.65zM288.497 50.32h-57.916v12.355h57.916zM207.289 50.325h-49.62V62.68h49.62z"
              />
              <path
                d="M190.289 0h-15.563l-47.525 115.904h14.409l13.908-34.27 5.133-12.755 21.859-53.812 21.687 53.812 5.13 12.754 13.912 34.271h14.57L190.29 0z"
                fill="#fff"
                fillRule="nonzero"
              />
            </svg>
          </a>

          <div className={`nav__list--mobile ${this.state.navBarActiveClass}`}>
            <ul onClick={() => this.toggleHamburger()}>
              <li>
                <Link to="/#services">Services</Link>
              </li>
              <li>
                <Link to="/#about">About</Link>
              </li>
              <li>
                <Link to="/#testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/#contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={`nav__list`}>
            <ul>
              <li>
                <Link to="/#services">Services</Link>
              </li>
              <li>
                <Link to="/#about">About</Link>
              </li>
              <li>
                <Link to="/#testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/#contact">Contact</Link>
              </li>
              <li>
                <a href="/#">
                  <svg
                    className="nav__logo"
                    viewBox="0 0 100 31"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="#FFF" fillRule="evenodd">
                      <path
                        d="M23.52-.003v3.329H13.49v26.936h-3.46V3.326H-.002v-3.33z"
                        fillRule="nonzero"
                      />

                      <path d="M34.94 13.139H20.41v3.226h14.53z" />
                      <path
                        d="M49.684 0H45.62L33.212 30.262h3.762l3.631-8.948 1.34-3.33 5.708-14.05 5.662 14.05 1.34 3.33 3.632 8.948h3.804z"
                        fillRule="nonzero"
                      />
                      <path d="M54.123 13.14H41.167v3.226h12.956z" />
                      <path d="M75.325 13.139H60.203v3.226h15.122z" />

                      <path
                        d="M99.988-.003v3.329H82.78v9.815h15.436v3.285H82.78v10.507h17.208v3.33H79.322V-.004z"
                        fillRule="nonzero"
                      />
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};

export default Nav;
