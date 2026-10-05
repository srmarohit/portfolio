import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { Box, Button, Stack, Typography } from "@mui/material";
import { profile } from "../../data/profile";
import { fadeInUp, staggerContainer } from "../../animations/variants";

export function Hero() {
  return (
    <Box
      id="hero"
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        pt: { xs: 10, md: 0 },
      }}
    >
      <Box
        sx={{ maxWidth: "lg", mx: "auto", px: { xs: 3, md: 6 }, width: "100%" }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <Typography
              variant="subtitle1"
              color="primary"
              sx={{ fontWeight: 600 }}
            >
              Hi, I'm
            </Typography>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2.5rem", md: "3.75rem" },
              }}
            >
              {profile.name}
            </Typography>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Typography
              variant="h4"
              component="h2"
              color="text.secondary"
              sx={{ mt: 1, fontSize: { xs: "1.25rem", md: "1.75rem" } }}
            >
              {profile.role}
            </Typography>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mt: 3, maxWidth: 520 }}
            >
              {profile.tagline}
            </Typography>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
              <Button variant="contained" size="large">
                <ScrollLink to="projects" smooth duration={500} offset={-72}>
                  View Work
                </ScrollLink>
              </Button>
              <Button variant="outlined" size="large">
                <ScrollLink to="contact" smooth duration={500} offset={-72}>
                  Get in Touch
                </ScrollLink>
              </Button>
            </Stack>
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
}
