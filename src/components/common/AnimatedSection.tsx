import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Box, Container, type SxProps, type Theme } from "@mui/material";
import { fadeInUp } from "../../animations/variants";

interface AnimatedSectionProps {
  id: string;
  children: ReactNode;
  sx?: SxProps<Theme>;
  maxWidth?: "sm" | "md" | "lg" | "xl" | false;
}

/** Reveals section content once when it scrolls into view, reused by every portfolio section. */
export function AnimatedSection({
  id,
  children,
  sx,
  maxWidth = "lg",
}: AnimatedSectionProps) {
  return (
    <Box
      id={id}
      component="section"
      sx={{ py: { xs: 8, md: 12 }, scrollMarginTop: "72px", ...sx }}
    >
      <Container maxWidth={maxWidth}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          {children}
        </motion.div>
      </Container>
    </Box>
  );
}
