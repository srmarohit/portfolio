import type { ComponentType, ReactNode } from "react";
import { motion } from "framer-motion";
import {
  alpha,
  Avatar,
  Box,
  Chip,
  Grid,
  LinearProgress,
  Paper,
  Stack,
  Typography,
  type SvgIconProps,
} from "@mui/material";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import WebRoundedIcon from "@mui/icons-material/WebRounded";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import DataObjectRoundedIcon from "@mui/icons-material/DataObjectRounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { AnimatedSection } from "../common/AnimatedSection";
import { skillCategories } from "../../data/skills";
import { fadeInUp, staggerContainer } from "../../animations/variants";

type AccentColor = "primary" | "info" | "success" | "warning" | "secondary";

// Cycled by category index so the palette/icon pairing stays stable if categories are added later.
const accentPalette: { color: AccentColor; Icon: ComponentType<SvgIconProps> }[] = [
  { color: "primary", Icon: CodeRoundedIcon },
  { color: "info", Icon: WebRoundedIcon },
  { color: "success", Icon: DnsRoundedIcon },
  { color: "warning", Icon: CloudRoundedIcon },
  { color: "secondary", Icon: StorageRoundedIcon },
];

const average = (levels: number[]) =>
  Math.round(levels.reduce((sum, level) => sum + level, 0) / levels.length);

// Pill badge for the stats row, mirroring the Figma "skills / categories / ..." indicators.
function StatPill({
  icon,
  value,
  label,
}: {
  icon: ReactNode;
  value: string;
  label: string;
}) {
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        gap: 1,
        px: 2,
        py: 0.75,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 999,
        bgcolor: "background.paper",
      }}
    >
      <Box sx={{ display: "flex", color: "text.secondary" }}>{icon}</Box>
      <Typography variant="body2" sx={{ fontWeight: 700 }}>
        {value}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </Stack>
  );
}

export function Skills() {
  const totalSkills = skillCategories.reduce(
    (sum, category) => sum + category.skills.length,
    0,
  );
  const overallAverage = average(
    skillCategories.flatMap((category) => category.skills.map((s) => s.level)),
  );

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
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Technologies and tools I work with regularly.
      </Typography>

      <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1.5, mb: 4 }}>
        <StatPill
          icon={<DataObjectRoundedIcon fontSize="small" />}
          value={`${totalSkills}`}
          label="skills"
        />
        <StatPill
          icon={<CategoryRoundedIcon fontSize="small" />}
          value={`${skillCategories.length}`}
          label="categories"
        />
        <StatPill
          icon={<TrendingUpRoundedIcon fontSize="small" />}
          value={`${overallAverage}%`}
          label="avg. proficiency"
        />
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            gap: 1,
            px: 2,
            py: 0.75,
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 999,
            bgcolor: "background.paper",
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: "success.main",
            }}
          />
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            Always learning
          </Typography>
        </Stack>
      </Stack>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <Grid container spacing={3}>
          {skillCategories.map((category, index) => {
            const { color, Icon } = accentPalette[index % accentPalette.length];

            return (
              <Grid key={category.category} size={{ xs: 12, md: 6 }}>
                <motion.div variants={fadeInUp} style={{ height: "100%" }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: "100%",
                      borderRadius: 2,
                      border: "1px solid",
                      borderColor: "divider",
                      borderLeft: "4px solid",
                      borderLeftColor: `${color}.main`,
                      boxShadow: (theme) =>
                        theme.palette.mode === "dark"
                          ? "none"
                          : "0 1px 3px rgba(15, 23, 42, 0.06)",
                      transition: "box-shadow 0.2s ease, transform 0.2s ease",
                      "&:hover": {
                        boxShadow: "0 12px 24px rgba(15, 23, 42, 0.1)",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    <Stack
                      direction="row"
                      sx={{ alignItems: "center", gap: 1.5, mb: 1.5 }}
                    >
                      <Avatar
                        variant="rounded"
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: 2,
                          bgcolor: (theme) =>
                            alpha(theme.palette[color].main, 0.12),
                          color: `${color}.main`,
                        }}
                      >
                        <Icon fontSize="small" />
                      </Avatar>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {category.category}
                      </Typography>
                    </Stack>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {category.description}
                    </Typography>

                    <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                      {category.skills.map((skill) => (
                        <Chip
                          key={skill.name}
                          label={skill.name}
                          size="small"
                          sx={{
                            bgcolor: (theme) =>
                              alpha(theme.palette[color].main, 0.12),
                            color: `${color}.main`,
                            fontWeight: 600,
                            border: "1px solid",
                            borderColor: (theme) =>
                              alpha(theme.palette[color].main, 0.3),
                          }}
                        />
                      ))}
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <Paper
          elevation={0}
          sx={{
            p: 3,
            mt: 3,
            borderRadius: 2,
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <Grid container spacing={4} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography
                variant="overline"
                color="text.secondary"
                sx={{ letterSpacing: 1 }}
              >
                Skill proficiency
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                {overallAverage}%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Average confidence across {skillCategories.length} skill
                categories.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack spacing={2}>
                {skillCategories.map((category, index) => {
                  const { color } = accentPalette[index % accentPalette.length];
                  const categoryAverage = average(
                    category.skills.map((skill) => skill.level),
                  );

                  return (
                    <Stack
                      key={category.category}
                      direction="row"
                      sx={{ alignItems: "center", gap: 2 }}
                    >
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 600, minWidth: 100 }}
                      >
                        {category.category}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={categoryAverage}
                        color={color}
                        sx={{ height: 8, borderRadius: 4, flexGrow: 1 }}
                      />
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ minWidth: 36, textAlign: "right" }}
                      >
                        {categoryAverage}%
                      </Typography>
                    </Stack>
                  );
                })}
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </motion.div>
    </AnimatedSection>
  );
}
