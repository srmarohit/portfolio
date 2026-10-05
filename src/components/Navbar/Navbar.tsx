import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { navSections } from "../../data/navigation";
import { profile } from "../../data/profile";
import { useThemeMode } from "../../theme/useThemeMode";

const NAV_OFFSET = -72;

/** Hides the navbar on scroll-down and reveals it on scroll-up. */
function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export function Navbar() {
  const { mode, toggleMode } = useThemeMode();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{ backdropFilter: "blur(10px)" }}
        elevation={1}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 700, cursor: "pointer" }}
          >
            <ScrollLink to="hero" smooth duration={500} offset={NAV_OFFSET}>
              {profile.name}
            </ScrollLink>
          </Typography>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
            }}
          >
            {navSections.map((section) => (
              <Button key={section.id} color="inherit">
                <ScrollLink
                  to={section.id}
                  spy
                  smooth
                  duration={500}
                  offset={NAV_OFFSET}
                  activeClass="nav-link-active"
                >
                  {section.label}
                </ScrollLink>
              </Button>
            ))}
            <IconButton
              onClick={toggleMode}
              color="inherit"
              aria-label="Toggle theme"
            >
              {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              gap: 1,
            }}
          >
            <IconButton
              onClick={toggleMode}
              color="inherit"
              aria-label="Toggle theme"
            >
              {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              color="inherit"
              aria-label="Open navigation"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>

        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <List sx={{ width: 220 }}>
            {navSections.map((section) => (
              <ListItemButton
                key={section.id}
                onClick={() => setDrawerOpen(false)}
              >
                <ScrollLink
                  to={section.id}
                  smooth
                  duration={500}
                  offset={NAV_OFFSET}
                  style={{ width: "100%" }}
                >
                  <ListItemText primary={section.label} />
                </ScrollLink>
              </ListItemButton>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </HideOnScroll>
  );
}
