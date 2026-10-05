import { Avatar, Box, Button, Grid, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { AnimatedSection } from "../common/AnimatedSection";
import { profile } from "../../data/profile";

export function Introduction() {
  return (
    <AnimatedSection id="introduction">
      <Grid container spacing={6} sx={{ alignItems: "center" }}>
        <Grid
          size={{ xs: 12, md: 4 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Avatar
            src={profile.avatarUrl}
            alt={profile.name}
            sx={{ width: 220, height: 220, boxShadow: 4 }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            About Me
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
            {profile.bio}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Based in {profile.location}
          </Typography>
          <Box>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              href={profile.resumeUrl}
              download
            >
              Download Resume
            </Button>
          </Box>
        </Grid>
      </Grid>
    </AnimatedSection>
  );
}
