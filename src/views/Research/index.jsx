import React from "react";
import Box from "@mui/material/Box";
import styles from "./index.module.css";
import PageList from "../../components/pageList"; // 确保这个路径正确
import { articles } from "../../constants/articles";
import { TITLE, SUBTITLE, BUTTON_TEXT } from "../../constants/research";

const Research = () => {
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
        </Box>
      </Box>

      {/* 带有颜色背景的 Box */}
      <Box className={styles.colorBox}>
        <PageList
          items={articles}
          title="Publications"
          basePath="/articleDetail"
          buttonText={BUTTON_TEXT}
        />
      </Box>
    </div>
  );
};

export default Research;
