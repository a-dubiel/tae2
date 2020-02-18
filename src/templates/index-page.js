import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import What from "../components/What";
import TopHeader from "../components/TopHeader";
import SingleImage from "../components/SingleImage";
import Things from "../components/Things";
import Ticker from "../components/Ticker";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Divider from "../components/Divider";
import Contact from "../components/Contact";
import Bottom from "../components/Bottom";
import Nav from "../components/Nav";

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  console.log(frontmatter);

  return (
    <Layout>
      <section className="content">
        <TopHeader slider={frontmatter.topslider} />
        <What data={frontmatter.what} />
        <Ticker ticker={frontmatter.ticker} />
        <Things things={frontmatter.things} />
        <SingleImage image={frontmatter.singleimage} />
        <About data={frontmatter.about} />
        <SingleImage image={frontmatter.singleimage2} />
        <Testimonials testimonials={frontmatter.testimonials} />
        <Divider />
        <Contact data={frontmatter.contact} />
      </section>
      <Bottom data={frontmatter.contact} />
      <Nav />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        topslider {
          slides {
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
        what {
          content
          image {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        ticker
        things {
          dotitle
          donttitle
          dont {
            text
          }
          do {
            text
          }
        }
        singleimage {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        about {
          content
          quote
          heading
          slider {
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        singleimage2 {
          childImageSharp {
            fluid(maxWidth: 1400, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        testimonials {
          slider {
            image {
              childImageSharp {
                fluid(maxWidth: 1400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            quote
            author
          }
        }
        contact {
          buttonlabel
          buttonurl
          contacttext
          email
          facebook
          image {
            childImageSharp {
              fluid(maxWidth: 1400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          instagram
          introtext
          phone
          pressemail
        }
      }
    }
  }
`;

// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//       frontmatter {
//         title
//         image {
//           childImageSharp {
//             fluid(maxWidth: 2048, quality: 100) {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//         heading
//         subheading
//         mainpitch {
//           title
//           description
//         }
//         description
//         intro {
//           blurbs {
//             image {
//               childImageSharp {
//                 fluid(maxWidth: 240, quality: 64) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//             text
//           }
//           heading
//           description
//         }
//       }
//     }
//   }
// `;
