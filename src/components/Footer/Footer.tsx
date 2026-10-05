import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PlaceIcon from "@mui/icons-material/Place";
import { profile } from "../../data/profile";
import { contact } from "../../data/contact";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{ py: 4, borderTop: 1, borderColor: "divider" }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2} sx={{ alignItems: "center" }}>
          <Stack direction="row" spacing={1}>
            <IconButton
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              href={`https://wa.me/${profile.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </IconButton>
          </Stack>
          <Stack
            direction="row"
            spacing={0.5}
            sx={{ alignItems: "center", color: "text.secondary" }}
          >
            <PlaceIcon fontSize="small" />
            <Typography variant="body2">{contact.address}</Typography>
          </Stack>
          <Typography variant="caption" color="text.secondary">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
