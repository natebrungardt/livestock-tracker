import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [herdMenuOpen, setHerdMenuOpen] = useState(false);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Livestock Tracker
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              component={Link}
              to="/"
              sx={{ mx: 2, my: 2, color: "white", display: "block" }}
            >
              Home
            </Button>
            <Box
              onMouseEnter={() => setHerdMenuOpen(true)}
              onMouseLeave={() => setHerdMenuOpen(false)}
              sx={{ position: "relative" }}
            >
              <Button sx={{ mx: 2, my: 2, color: "white", display: "block" }}>
                Herds
              </Button>
              {herdMenuOpen && (
                <Box
                  sx={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "white",
                    boxShadow: 2,
                    borderRadius: 1,
                    zIndex: 1000,
                    minWidth: "150px",
                  }}
                >
                  <Button
                    component={Link}
                    to="/main-herd"
                    fullWidth
                    sx={{
                      color: "black",
                      justifyContent: "flex-start",
                      textTransform: "none",
                      display: "block",
                    }}
                  >
                    Main Herd
                  </Button>
                  <Button
                    component={Link}
                    to="/fats"
                    fullWidth
                    sx={{
                      color: "black",
                      justifyContent: "flex-start",
                      textTransform: "none",
                      display: "block",
                    }}
                  >
                    Fats
                  </Button>
                  <Button
                    component={Link}
                    to="/feeders"
                    fullWidth
                    sx={{
                      color: "black",
                      justifyContent: "flex-start",
                      textTransform: "none",
                      display: "block",
                    }}
                  >
                    Feeders
                  </Button>
                  <Button
                    component={Link}
                    to="/history"
                    fullWidth
                    sx={{
                      color: "black",
                      justifyContent: "flex-start",
                      textTransform: "none",
                      display: "block",
                    }}
                  >
                    History
                  </Button>
                </Box>
              )}
            </Box>
            <Button
              component={Link}
              to="/vaccinating"
              sx={{ mx: 2, my: 2, color: "white", display: "block" }}
            >
              Vaccinating
            </Button>
            <Button
              component={Link}
              to="/sicks"
              sx={{ mx: 2, my: 2, color: "white", display: "block" }}
            >
              Sicks
            </Button>
            <Button
              component={Link}
              to="/heat-watch"
              sx={{ mx: 2, my: 2, color: "white", display: "block" }}
            >
              Heat Watch
            </Button>
            <Button
              component={Link}
              to="/breds"
              sx={{ mx: 2, my: 2, color: "white", display: "block" }}
            >
              Breds
            </Button>
            <Button
              component={Link}
              to="/opens"
              sx={{ mx: 2, my: 2, color: "white", display: "block" }}
            >
              Opens
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}></Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
