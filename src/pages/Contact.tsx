import React from "react";
import Card from "@mui/material/Card";
import Page from "../components/Page";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import ContactForm from "../components/ContactForm";

/**
 * Contact Page
 */
const Contact: React.FC<{}> = () => {
  return (
    <Page>
      <Card elevation={20} sx={{ transition: "all ease-in-out 0.75s" }}>
        <CardContent
          sx={{
            maxWidth: "450px",
            textAlign: "center",
            p: { xs: 2, sm: 4 },
          }}
        >
          <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
            Message
          </Typography>
          <ContactForm />
        </CardContent>
      </Card>
    </Page>
  );
};

export default Contact;
