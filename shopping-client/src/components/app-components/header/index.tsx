import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import ProductsPage from "../../pages/productsPage";

export const routingConfiguration = [
  {
    key: "prodcuts",
    path: "/prodcuts",
    label: "Prodcuts",
    element: <ProductsPage />
  },
];

export type RouteConfig = typeof routingConfiguration[0];

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              letterSpacing: ".3rem",
            }}>
            <img style={{ width:"60px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKEUIPK1S0gHNI-k-vc3e8znrL5KojXQA7aQ&usqp=CAU" alt="" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {routingConfiguration.map((route: RouteConfig) => (
              <Button key={route.key}>
                <Typography textAlign="center">
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={route.path}>
                    {route.label}
                  </Link>
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
