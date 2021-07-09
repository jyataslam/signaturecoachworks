import * as React from "react";
import HeaderOne from "@/components/header-one";
import Quote from "@/components/quote";
import Footer from "@/components/footer";
import Error from "@/components/404";
import Layout from "../components/layout";

const NotFoundPage = () => (
  <Layout PageTitle="This Page Doesn't Exist">
    <Quote />
    <HeaderOne />
    <Error />
    <Footer />
  </Layout>
);

export default NotFoundPage;
