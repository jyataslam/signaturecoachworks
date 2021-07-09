import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import HeaderOne from "@/components/header-one";
import Success from "@/components/success";

const StoragePage = () => {
  return (
    <Layout PageTitle="Success">
      <HeaderOne />
      <Success />
      <Footer />
    </Layout>
  );
};

export default StoragePage;
