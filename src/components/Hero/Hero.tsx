import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { Box, Button, Stack, Typography } from "@mui/material";
import { profile } from "../../data/profile";
import { fadeInUp, scaleIn, staggerContainer } from "../../animations/variants";

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
        sx={{
          maxWidth: "lg",
          mx: "auto",
          px: { xs: 3, md: 6 },
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 6, md: 4 },
        }}
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
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          style={{ flexShrink: 0, perspective: 900 }}
        >
          <Box
            sx={{
              width: { xs: 220, sm: 260, md: 320 },
              height: { xs: 220, sm: 260, md: 320 },
              borderRadius: "50%",
              p: "6px",
              background:
                "linear-gradient(135deg, #47A248 0%, #61DAFB 50%, #83CD29 100%)",
              transform: "perspective(900px) rotateX(8deg) rotateY(-10deg)",
              boxShadow: [
                "18px 28px 20px -12px rgba(0,0,0,0.55)",
                "8px 14px 30px rgba(0,0,0,0.4)",
                "0 0 45px rgba(97,218,251,0.35)",
                "inset 0 2px 4px rgba(255,255,255,0.4)",
              ].join(", "),
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                bgcolor: "background.paper",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "inset 0 2px 8px rgba(0,0,0,0.25)",
              }}
            >
              <Box
                component="img"
                src={profile.heroImageUrl}
                alt={profile.heroImageAlt}
                sx={{ width: "82%", height: "82%", display: "block" }}
              />
            </Box>
          </Box>
        </motion.div>
      </Box>
    </Box>
  );
}
