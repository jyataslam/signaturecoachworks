import React from "react";
import { graphql } from "gatsby";
import SEO from "@/components/seo";
import Quote from "@/components/quote";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ProtfolioDetails from "@/components/protfolio-details";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";

export const query = graphql`
  query($slug: String!) {
    inventoryJson(slug: { eq: $slug }) {
      slug
      title
      description
      price
      miles
      number
      commonDetails
      listDetails
      images {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      featuredImage {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          fluid(quality: 90, maxWidth: 4160) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
`;

const InventoryTemplate = ({ data: { inventoryJson } }) => {
  const headerImg = inventoryJson.featuredImage.childImageSharp.fluid;
  const seoImg = inventoryJson.featuredImage.childImageSharp.fluid.src;
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle={inventoryJson.title}>
          <SEO
            title={inventoryJson.title}
            description={inventoryJson.description}
            image={seoImg}
            url={inventoryJson.slug}
          />
          <Quote />
          <HeaderOne />
          <PageBanner
            title={inventoryJson.title}
            name="Sales"
            image={headerImg}
            bg="dark__bg"
          />
          <ProtfolioDetails data={inventoryJson} />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default InventoryTemplate;
