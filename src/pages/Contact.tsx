import React from "react";
import Card from "@mui/material/Card";
import Page from "../components/Page";
import CardContent from "@mui/material/CardContent";
import ContactForm from "../components/ContactForm";

/**
 * Contact Page
 */
const Contact: React.FC<{}> = () => {
  return (
    <Page>
      <Card
        elevation={20}
        sx={{
          p: { xs: 1, sm: 3 },
          pt: { xs: 3, sm: 5 },
          transition: "all ease-in-out 0.75s",
          "&:last-child": { pb: { xs: 1, sm: 3 } },
        }}
      >
        <CardContent
          sx={{
            maxWidth: "450px",
            textAlign: "center",
          }}
        >
          <ContactForm />
        </CardContent>
      </Card>
    </Page>
  );
};

export default Contact;
