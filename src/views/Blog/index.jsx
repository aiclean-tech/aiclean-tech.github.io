import React from "react";
import { Box, Button } from "@mui/material";
import styles from "./index.module.css";
import { BUTTON_TEXT, TITLE, SUBTITLE } from "../../constants/blog";
import ArticleList from "../../components/pageList"; // 确保这个路径正确
import { news } from "../../constants/news";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <Box className={styles.videoBox}>
        <Box className={styles.videoContent}>
          <h2
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: TITLE }}
          ></h2>
          <p
            className={styles.subtitle}
            dangerouslySetInnerHTML={{ __html: SUBTITLE }}
          ></p>
          <Link to="/rank" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Go to Rank
            </Button>
          </Link>
        </Box>
      </Box>

      {/* 带有颜色背景的 Box */}
      <Box className={styles.colorBox}>
        <ArticleList
          items={news}
          title="News"
          basePath="/newsDetail"
          buttonText={BUTTON_TEXT}
        />
      </Box>
    </div>
  );
};

export default Blog;
