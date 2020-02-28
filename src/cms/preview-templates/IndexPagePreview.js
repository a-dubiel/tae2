import React from "react";
import PropTypes from "prop-types";
import Layout from "../../components/Layout";
import What from "../../components/What";
import TopHeader from "../../components/TopHeader";
import SingleImage from "../../components/SingleImage";
import Things from "../../components/Things";
import Ticker from "../../components/Ticker";
import About from "../../components/About";
import Testimonials from "../../components/Testimonials";
import Stripes from "../../components/Stripes";
import Contact from "../../components/Contact";
import Bottom from "../../components/Bottom";
import Nav from "../../components/Nav";
// import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return <div></div>;
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default IndexPagePreview;
