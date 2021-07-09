import React from "react";
import SEO from "@/components/seo";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import ContactInfos from "@/components/contact-infos";
import ContactForm from "@/components/contact-form";
import PageBanner from "@/components/page-banner";
import SearchContextProvider from "@/context/search-context";
import MenuContextProvider from "@/context/menu-context";
import HeaderOne from "@/components/header-one";
import Quote from "@/components/quote";
import seoImg from "../images/logo-card.jpg";

const ContactPage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Contact Page">
          <SEO
            title="Contact Us"
            description="Get a free quote or contact us regarding sales"
            image={seoImg}
            url="/contact"
          />
          <Quote />
          <HeaderOne />
          <PageBanner title="Contact Us" name="Contact" />
          <ContactForm />
          <ContactInfos />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ContactPage;
