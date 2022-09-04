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
    path: "/",
    label: "Prodcuts",
    element: <ProductsPage />
  },
];

export type RouteConfig = typeof routingConfiguration[0];

const matrixLogo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBzOEosctXw-bWCC3A6bSb8wOmw-7DGhfYObl-dAWY3wIgKoeGOMPT-UqmaRubfTryZHA&usqp=CAU";

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
            <img style={{ width:"60px",border:"10px solid white" }} src={matrixLogo} alt="matrixLogo" />
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
