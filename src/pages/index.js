import React from "react";
import Layout from "@/components/layout";
import Quote from "@/components/quote";
import Footer from "@/components/footer";
import SalesTwo from "@/components/sales-two";
import StorageHome from "@/components/storage-home";
import PortfolioHome from "@/components/portfolio-home";
import ContactInfos from "@/components/contact-infos";
import Testimonials from "@/components/testimonials-carousel";
import ServiceTwo from "@/components/service-two";
import About from "@/components/about-hero";
import HeaderOne from "@/components/header-one";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import SliderTwo from "@/components/slider-two";
import SEO from "@/components/seo";
import seoImg from "../images/logo-card.jpg";

const HomeOne = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Signature Coachworks">
          <SEO
            title="Premier Coach Repair and Sales"
            description="Premier coach and RV sales and full service repair shop in Beaumont, CA."
            image={seoImg}
          />
          <Quote />
          <HeaderOne />
          <SliderTwo />
          <About />
          <ServiceTwo />
          <ContactInfos />
          <Testimonials />
          <StorageHome />
          <SalesTwo />
          <PortfolioHome />
          {/* <GoogleMap extraClass="contact-page" /> */}
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeOne;
