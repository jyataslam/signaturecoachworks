import React from "react";
import { Link } from "gatsby";
import "@/css/success.css";

const Success = () => {
  return (
    <div className="success">
      <h1>Thanks, your message has been sent!</h1>
      <p>We will get back to you within 24 hours.</p>
      <Link to="/" className={`common_btn red_bg blue_bg`}>
        <span>Back To Home</span>
      </Link>
    </div>
  );
};

export default Success;
