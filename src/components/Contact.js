import React from "react";
import PropTypes from "prop-types";

const Contact = ({ data }) => (
  <section id="contact" className="content-grid u-border-bottom">
    <div className="content-grid__item content-grid__item--top">
      <div className="content-grid__title">
        <h2>
          <span>Contact</span>
          <span>Me</span>
        </h2>
      </div>
      <div className="content-grid__img">
        <img
          sizes={`${data.image.childImageSharp.fluid.sizes}`}
          src={`${data.image.childImageSharp.fluid.src}`}
          srcSet={`${data.image.childImageSharp.fluid.srcSet}`}
          alt={"J Lo."}
        />
      </div>
    </div>
    <div className="content-grid__item content-grid__item--bg-light-blue">
      <div className="content-grid__text">
        <p>{data.introtext}</p>
        {data.buttonurl && (
          <a
            href={`${data.buttonurl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="button u-mb4"
          >
            {data.buttonlabel}
          </a>
        )}
        <p>{data.contacttext}</p>
        {data.phone && (
          <a
            href={`tel:${data.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="button--contact"
          >
            {data.phone}
          </a>
        )}
        {data.email && (
          <a
            href={`mailto:${data.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="button--contact button--underline u-mb3"
          >
            {data.email}
          </a>
        )}
        {data.instagram && (
          <p>
            <a
              href={`${data.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="button--icon"
            >
              <i>
                <svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5.283.11c-1.465.067-2.735.425-3.76 1.446C.492 2.582.14 3.857.072 5.306c-.04.906-.282 7.742.417 9.535a4.537 4.537 0 002.62 2.612c.569.222 1.219.372 2.173.416 7.974.36 10.93.164 12.177-3.028.221-.568.374-1.217.416-2.169.364-7.995-.06-9.728-1.45-11.116C15.325.456 14.029-.292 5.284.11m.073 16.15c-.873-.039-1.347-.184-1.663-.307a2.93 2.93 0 01-1.7-1.694c-.532-1.363-.355-7.833-.308-8.88.047-1.025.255-1.962.978-2.686.896-.893 2.053-1.331 9.93-.975 1.029.046 1.968.253 2.694.975.895.893 1.34 2.06.978 9.907-.04.87-.186 1.343-.308 1.659-.81 2.077-2.675 2.365-10.6 2.002M12.68 4.22a1.074 1.074 0 002.15 0 1.074 1.074 0 00-2.15 0M4.376 8.989a4.593 4.593 0 004.599 4.587 4.593 4.593 0 004.599-4.587 4.592 4.592 0 00-4.599-4.586 4.592 4.592 0 00-4.599 4.586m1.614 0a2.981 2.981 0 012.985-2.977 2.981 2.981 0 012.985 2.977 2.982 2.982 0 01-2.985 2.978A2.982 2.982 0 015.99 8.99"
                    fill="#1A1A1A"
                    fillRule="evenodd"
                  />
                </svg>
              </i>
              Instagram
            </a>
          </p>
        )}
      </div>
    </div>
  </section>
);

Contact.propTypes = {
  data: PropTypes.object
};

export default Contact;
