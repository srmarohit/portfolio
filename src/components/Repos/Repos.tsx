import { motion } from "framer-motion";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarIcon from "@mui/icons-material/Star";
import { AnimatedSection } from "../common/AnimatedSection";
import { projects } from "../../data/projects";
import { fadeInUp, staggerContainer } from "../../animations/variants";

export function Repos() {
  const repos = projects.filter((project) => project.repoUrl);

  return (
    <AnimatedSection id="repos">
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        Published Repos
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Open source and public repositories on GitHub.
      </Typography>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <Grid container spacing={2}>
          {repos.map((repo) => (
            <Grid key={repo.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <motion.div variants={fadeInUp} style={{ height: "100%" }}>
                <Card variant="outlined" sx={{ height: "100%" }}>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        mb: 1,
                      }}
                    >
                      <GitHubIcon fontSize="small" />
                      <Link
                        href={repo.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        sx={{ fontWeight: 600 }}
                      >
                        {repo.title}
                      </Link>
                    </Box>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1.5 }}
                    >
                      {repo.description}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1.5}
                      sx={{ alignItems: "center" }}
                    >
                      {repo.language && (
                        <Chip label={repo.language} size="small" />
                      )}
                      {typeof repo.stars === "number" && (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <StarIcon fontSize="small" color="warning" />
                          <Typography variant="caption">
                            {repo.stars}
                          </Typography>
                        </Box>
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </AnimatedSection>
  );
}
