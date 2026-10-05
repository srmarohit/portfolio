import { motion } from "framer-motion";
import {
  Box,
  Chip,
  Grid,
  LinearProgress,
  Stack,
  Typography,
} from "@mui/material";
import { AnimatedSection } from "../common/AnimatedSection";
import { skillCategories } from "../../data/skills";
import { fadeInUp, staggerContainer } from "../../animations/variants";

export function Skills() {
  return (
    <AnimatedSection id="skills">
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        Skills
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Technologies and tools I work with regularly.
      </Typography>

      <Grid container spacing={4}>
        {skillCategories.map((category) => (
          <Grid key={category.category} size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              {category.category}
            </Typography>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <Stack spacing={2}>
                {category.skills.map((skill) => (
                  <motion.div key={skill.name} variants={fadeInUp}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mb: 0.5,
                      }}
                    >
                      <Chip
                        label={skill.name}
                        size="small"
                        variant="outlined"
                      />
                      <Typography variant="caption" color="text.secondary">
                        {skill.level}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </AnimatedSection>
  );
}
