import React from "react";
import SEO from "@/components/seo";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import StorageCustom from "@/components/storage-custom";
import CallToActionOne from "@/components/call-to-action-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";
import Quote from "@/components/quote";
import seoImg from "../images/logo-card.jpg";

const StoragePage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Storage">
          <SEO
            title="Storage"
            description="We provide safe and secure indoor and outdoor storage options for our clients. Each storage parking has optional shore power as well."
            image={seoImg}
            url="/storage"
          />
          <Quote />
          <HeaderOne />
          <PageBanner title="Storage" name="Storage" />
          <StorageCustom />
          <CallToActionOne extraClassName="ready_2" buttonClass="red_bg" />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default StoragePage;
