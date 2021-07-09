import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { TrustClientData } from "@/data";
import "../assets/css/trusted-client.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const StorageHome = ({ extraClassName }) => {
  const { title, text, url } = TrustClientData;
  const data = useStaticQuery(
    graphql`
      query {
        storageImage: file(relativePath: { eq: "homepage-storage-min.jpeg" }) {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    `
  );
  const image = getImage(data.storageImage.childImageSharp);
  return (
    <section className={`commonSection trustClient ${extraClassName}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="CL_content">
              <GatsbyImage image={image} alt="storage image" />
              <div className="abc_inner">
                <div className="row">
                  <div className="col-lg-5 col-sm-12 col-md-5"></div>
                  <div className="col-lg-7 col-sm-12 col-md-7">
                    <div className="abci_content">
                      <h2>{title}</h2>
                      <p>{text}</p>
                      <Link
                        to="/storage"
                        className="common_btn red_bg blue_bg on_white_bg"
                      >
                        <span>Explore Storage</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorageHome;
