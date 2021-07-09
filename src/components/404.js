import React from "react";
import { Link } from "gatsby";

const Error = () => {
  return (
    <section className="error__page">
      <h1>Oops, this page doesn't exist :/</h1>
      <Link to="/" className="common_btn red_bg">
        Go To Home
      </Link>
    </section>
  );
};

export default Error;
