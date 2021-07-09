import React, { useState } from "react";
import { navigate } from "gatsby";
import { ContactFormTitle } from "@/data";

const ContactForm = () => {
  const { subTitle, title, description } = ContactFormTitle;

  const [formState, setFormState] = useState({
    f_name: "",
    l_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => navigate("/success"))
      .catch(error => console.log("message not sent", error));
  };

  return (
    <section className="commonSection ContactPage">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title">{subTitle}</h4>
            <h2 className="sec_title">{title}</h2>
            <p className="sec_desc">{description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-10 offset-md-1">
            <form
              action="/success"
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              className="contactFrom"
              id="contactForm"
              name="contact"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="text"
                    name="f_name"
                    id="f_name"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={formState.f_name}
                    required
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="text"
                    name="l_name"
                    id="l_name"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={formState.l_name}
                    required
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    onChange={handleChange}
                    value={formState.email}
                    required
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    value={formState.phone}
                    required
                  />
                </div>
                <div className="col-lg-12 col-sm-12">
                  <textarea
                    className="input-form required"
                    name="message"
                    id="message"
                    placeholder="Write Message"
                    onChange={handleChange}
                    value={formState.message}
                    required
                  ></textarea>
                </div>
              </div>
              <button
                className="common_btn red_bg"
                type="submit"
                id="con_submit"
              >
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
