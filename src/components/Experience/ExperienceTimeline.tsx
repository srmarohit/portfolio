import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from "@mui/lab";
import { Box, Chip, Paper, Stack, Typography } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import { AnimatedSection } from "../common/AnimatedSection";
import { experience } from "../../data/experience";

export function ExperienceTimeline() {
  return (
    <AnimatedSection id="experience">
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        Experience
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
        Companies I've worked with and what I built there.
      </Typography>

      <Timeline position="alternate">
        {experience.map((entry) => (
          <TimelineItem key={entry.id}>
            <TimelineOppositeContent
              color="text.secondary"
              sx={{ textAlign: "left" }}
            >
              {entry.startDate} - {entry.endDate}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <WorkIcon fontSize="small" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ textAlign: "left" }}>
              <Paper elevation={2} sx={{ p: 2.5, textAlign: "left" }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {entry.role}
                </Typography>
                <Typography variant="subtitle2" color="primary" gutterBottom>
                  {entry.company} - {entry.location}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1.5 }}
                >
                  {entry.summary}
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 2.5, mb: 1.5 }}>
                  {entry.highlights.map((highlight) => (
                    <Typography
                      key={highlight}
                      component="li"
                      variant="body2"
                      color="text.secondary"
                    >
                      {highlight}
                    </Typography>
                  ))}
                </Box>
                <Stack direction="row" sx={{ flexWrap: "wrap", gap: 1 }}>
                  {entry.techStack.map((tech) => (
                    <Chip key={tech} label={tech} size="small" />
                  ))}
                </Stack>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </AnimatedSection>
  );
}
