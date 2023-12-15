import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import isEmail from "validator/lib/isEmail";
import Snackbar from "@mui/material/Snackbar";
import TextField from "@mui/material/TextField";
import Alert, { AlertColor } from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";

interface SnackProps {
  open: boolean;
  message: string;
  severity: AlertColor | undefined;
}

// Initial state values
const initialContactForm = { name: "", email: "", message: "" };
const initialValidation = { name: true, email: true, message: true };
const initialSnack = { open: false, message: "", severity: undefined };

/**
 * Contact Page
 */
const ContactForm: React.FC<{}> = () => {
  // Local State
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState<SnackProps>(initialSnack);
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
    const message = contactForm.message.length > 10;
    setValidated({ name, email, message });
    if (name && email && message && validated) {
      setLoading(true);
      try {
        // Send message to email
        const url = process.env.REACT_APP_EMAIL_FN || "";
        let result = await axios.post(url, contactForm);
        // Check for errors
        if (result.data.error) throw new Error(result.data.message);
        // Create notification
        setSnack({ open: true, severity: "success", message: "Message sent!" });
        // Clear form data
        setContactForm(initialContactForm);
      } catch (err: any) {
        // Log error
        console.error(err);
        setSnack({ open: true, severity: "error", message: "Failed to send" });
      } finally {
        // Resolve loading
        setLoading(false);
      }
    }
  };

  // Close snack
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setSnack((snack) => ({ ...snack, open: false }));
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
        type="email"
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
      <Snackbar
        open={snack.open}
        onClose={handleClose}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity={snack.severity}>
          {snack.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactForm;
