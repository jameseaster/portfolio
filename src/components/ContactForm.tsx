import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import isEmail from "validator/lib/isEmail";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";

// Initial state values
const initialValidation = { name: true, email: true, message: true };
const initialContactForm = { name: "", email: "", message: "" };

/**
 * Contact Page
 */
const ContactForm: React.FC<{}> = () => {
  // Local State
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(initialValidation);
  const [contactForm, setContactForm] = useState(initialContactForm);

  // Handle form changes
  const handleChange = (value: string, field: string) => {
    // Name must be less than 45
    if (field === "name" && value.length > 45) return;
    // Email must be less than 45
    if (field === "email" && value.length > 45) return;
    // Message must be less than 500
    if (field === "message" && value.length > 500) return;
    setContactForm((form) => ({ ...form, [field]: value }));
  };

  // Send message and notify user of result
  const sendMessage = async () => {
    const name = contactForm.name.length > 1;
    const email = isEmail(contactForm.email);
    const message = contactForm.email.length > 10;
    setValidated({ name, email, message });
    if (name && email && validated) {
      setLoading(true);
      console.log(contactForm);
      const result = await new Promise((r) => setTimeout(r, 3000));
      console.log({ result });
      // TODO: If successfully sent, clear form, ADD SNACKS
      setContactForm(initialContactForm);
      setLoading(false);
    }
  };

  // Check Contact Form Name Validation
  useEffect(() => {
    if (!validated.name && contactForm.name.length > 2) {
      setValidated((v) => ({ ...v, name: true }));
    }
  }, [contactForm.name, validated.name]);

  // Check Contact Form Email Validation
  useEffect(() => {
    if (!validated.email && isEmail(contactForm.email)) {
      setValidated((v) => ({ ...v, email: true }));
    }
  }, [contactForm.email, validated.email]);

  // Check Contact Form Message Validation
  useEffect(() => {
    if (!validated.message && contactForm.message.length > 9) {
      setValidated((v) => ({ ...v, message: true }));
    }
  }, [contactForm.message, validated.message]);

  return (
    <>
      <TextField
        focused
        label="Name"
        color="primary"
        error={!validated.name}
        value={contactForm.name}
        sx={{ mb: 1, maxWidth: "400px", width: "90%" }}
        helperText={!validated.name ? "Name is required" : " "}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleChange(event.target.value, "name");
        }}
      />
      <TextField
        focused
        label="Email"
        color="primary"
        error={!validated.email}
        value={contactForm.email}
        sx={{ mb: 1, maxWidth: "400px", width: "90%" }}
        helperText={!validated.email ? "Invalid email address" : " "}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleChange(event.target.value, "email");
        }}
      />
      <TextField
        focused
        rows={8}
        multiline
        label="Message"
        color="primary"
        error={!validated.message}
        value={contactForm.message}
        sx={{ mb: 1, maxWidth: "400px", width: "90%" }}
        helperText={!validated.message ? "Message is too short" : " "}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleChange(event.target.value, "message");
        }}
      />
      <Button
        variant="contained"
        disabled={loading}
        onClick={sendMessage}
        sx={{ textTransform: "none", maxWidth: "400px", width: "90%" }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Send"}
      </Button>
    </>
  );
};

export default ContactForm;
