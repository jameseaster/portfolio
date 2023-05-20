import React from "react";
import Page from "../components/Page";
import Typography from "@mui/material/Typography";
import ContactForm from "../components/ContactForm";

/**
 * Contact Page
 */
const Contact: React.FC<{}> = () => {
  return (
    <Page>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
        Contact
      </Typography>
      <ContactForm />
    </Page>
  );
};

export default Contact;
