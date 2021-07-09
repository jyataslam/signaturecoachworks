import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import SEO from "@/components/seo";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ServiceTwo from "@/components/service-two";
import CallToActionOne from "@/components/call-to-action-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";
import Quote from "@/components/quote";
import seoImg from "../images/mechanic.jpeg";

const ServicePage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        shopImage: file(relativePath: { eq: "services-header-dark-min.jpg" }) {
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
        <Layout PageTitle="Services">
          <SEO
            title="Services"
            description="We work on all major and minor brands of coach to ensure your coach gets the quality care it deserves."
            image={seoImg}
            url="/service"
          />
          <Quote />
          <HeaderOne />
          <PageBanner title="Services" name="Services" image={headerImg} />
          <ServiceTwo />
          <CallToActionOne extraClassName="ready_2" buttonClass="red_bg" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ServicePage;
