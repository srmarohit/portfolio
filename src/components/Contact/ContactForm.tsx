import { useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { AnimatedSection } from "../common/AnimatedSection";
import { profile } from "../../data/profile";

export function ContactForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const canSubmit = name.trim().length > 0 && message.trim().length > 0;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!canSubmit) return;
    const text = `Hi, I'm ${name}. ${message}`;
    const url = `https://wa.me/${profile.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatedSection id="contact" maxWidth="sm">
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        Get In Touch
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Have a project in mind or just want to say hi? Send me a message on
        WhatsApp.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Stack spacing={3}>
          <TextField
            label="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            required
            multiline
            minRows={4}
          />
          <Button
            type="submit"
            variant="contained"
            color="success"
            size="large"
            startIcon={<WhatsAppIcon />}
            disabled={!canSubmit}
          >
            Send via WhatsApp
          </Button>
        </Stack>
      </Box>
    </AnimatedSection>
  );
}
