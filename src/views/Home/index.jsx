import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "./index.module.css";
import videoSrc from "../../assets/aurora-low.mp4";
import {
  TITLE,
  // SUBTITLE,
  SECONDE_TITLE,
  SECONDE_BODY,
} from "../../constants/home";
import logo from "../../assets/headerLogo.ico";

const Home = () => {
  return (
    <div>
      {/* Box with video background */}
      <Box className={styles.videoBox}>
        <video autoPlay loop muted className={styles.video}>
          <source src={videoSrc} type="video/mp4" />
        </video>
        <Box className={styles.videoContent}>
          <h2
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: TITLE }}
          ></h2>
          {/* <p
            className={styles.subtitle}
            dangerouslySetInnerHTML={{ __html: SUBTITLE }}
          ></p> */}
          <Box mt={3} display="flex" justifyContent="center">
            <Button
              variant="contained"
              sx={{
                mr: 2,
                backgroundColor: "white",
                color: "black",
                "&:hover": {
                  backgroundColor: "#f0f0f0",
                },
              }}
            >
              Get A Demo
            </Button>
            <Button
              component={Link}
              to="/blog"
              variant="outlined"
              color="primary"
              sx={{ color: "white", borderColor: "white" }}
            >
              Latest News
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Box with color background */}
      <Box className={styles.colorBox}>
        <Container className={styles.colorBoxContainer}>
          <Box component="img" src={logo} alt="Logo" className={styles.logo} />
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            dangerouslySetInnerHTML={{ __html: SECONDE_TITLE }}
          ></Typography>
          <Typography
            variant="body1"
            className={styles.bodyText}
            dangerouslySetInnerHTML={{ __html: SECONDE_BODY }}
          ></Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Home;
