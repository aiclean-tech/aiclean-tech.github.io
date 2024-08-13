import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import logo from "../../assets/headerLogo.png";
import { LOGO_TITLE, NAV_ITEMS } from "../../constants/headerConstants";

const StyledAppBar = styled(AppBar)(({ scroll }) => ({
  backgroundColor: scroll ? "black" : "transparent",
  transition: "all 1s",
  padding: scroll ? "5px 20px" : "20px 40px",
  boxShadow: "none",
}));

const Navbar = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
  transition: "all 1s",
});

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledAppBar position="fixed" scroll={scroll}>
      <Toolbar>
        <div style={{ flexGrow: 0.1 }} />
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
            transition: "all 0.3s",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              height: scroll ? "30px" : "40px",
              marginRight: "15px",
              transition: "all 0.3s",
            }}
          />
          <Typography
            variant="h6"
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "white",
              transition: "all 0.3s",
            }}
          >
            {LOGO_TITLE}
          </Typography>
        </Link>
        <Navbar>
          {NAV_ITEMS.map((item, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{
                margin: "0 20px",
                color: location.pathname === item.path ? "yellow" : "white",
                fontSize: "20px",
                fontWeight: "bold",
                transition: "all 0.3s",
                "&:hover": {
                  color: "lightgray",
                },
              }}
            >
              <Link
                to={item.path}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {item.label}
              </Link>
            </Typography>
          ))}
        </Navbar>
        <div style={{ flexGrow: 0.3 }} />
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
