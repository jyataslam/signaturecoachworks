import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import SEO from "@/components/seo";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import CallToActionOne from "@/components/call-to-action-one";
import Quote from "@/components/quote";
import TestimonialsOneCarousel from "@/components/testimonials-carousel";
import FeatureTabOne from "@/components/feature-tab-1";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import seoImg from "../images/logo-card.jpg";

const AboutPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        shopImage: file(relativePath: { eq: "about-header.jpg" }) {
          id
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const headerImg = data.shopImage.childImageSharp.fluid;
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="About">
          <SEO
            title="About Us"
            description="Coach sales, body work, and professional RV renovations - Signature Coachworks does it all."
            image={seoImg}
            url="/about"
          />
          <Quote />
          <HeaderOne />
          <PageBanner title="About Us" name="About" image={headerImg} />
          <FeatureTabOne />
          <TestimonialsOneCarousel regularPadding="regular_padding" />
          <CallToActionOne extraClassName="ready_2" buttonClass="red_bg" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default AboutPage;
