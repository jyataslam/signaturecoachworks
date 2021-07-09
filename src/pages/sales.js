import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import SEO from "@/components/seo";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import InventoryFull from "@/components/inventory-full";
import CallToActionOne from "@/components/call-to-action-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";
import Quote from "@/components/quote";
import seoImg from "../images/stormtrooper-exterior-min.jpeg";

const InventoryPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        shopImage: file(relativePath: { eq: "services-header-min.jpg" }) {
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
        <Layout PageTitle="Sales">
          <SEO
            title="Sales"
            description="Signature Coachworks offers consignment sales on a wide variety of coaches and RV's."
            image={seoImg}
            url="/sales"
          />
          <Quote />
          <HeaderOne />
          <PageBanner title="Sales" name="Sales" image={headerImg} />
          <InventoryFull />
          <CallToActionOne extraClassName="ready_2" buttonClass="red_bg" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default InventoryPage;
