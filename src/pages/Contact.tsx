import React from "react";
import Page from "../components/Page";
import ContactForm from "../components/ContactForm";

/**
 * Contact Page
 */
const Contact: React.FC<{}> = () => {
  return (
    <Page>
      <h2>Contact</h2>
      <ContactForm />
    </Page>
  );
};

export default Contact;
