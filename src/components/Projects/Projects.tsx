import { motion } from "framer-motion";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import { AnimatedSection } from "../common/AnimatedSection";
import { projects } from "../../data/projects";
import { fadeInUp, staggerContainer } from "../../animations/variants";

export function Projects() {
  return (
    <AnimatedSection id="projects">
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        Projects
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        A selection of things I've built.
      </Typography>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <motion.div variants={fadeInUp} style={{ height: "100%" }}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ fontWeight: 600 }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 1.5 }}
                    >
                      {project.description}
                    </Typography>
                    <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                      {project.tags.map((tag) => (
                        <Chip key={tag} label={tag} size="small" />
                      ))}
                    </Stack>
                  </CardContent>
                  <CardActions sx={{ px: 2, pb: 2 }}>
                    {project.liveUrl && (
                      <Button
                        size="small"
                        startIcon={<LaunchIcon />}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </Button>
                    )}
                    {project.repoUrl && (
                      <Button
                        size="small"
                        startIcon={<GitHubIcon />}
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </AnimatedSection>
  );
}
