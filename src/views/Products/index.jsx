import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import styles from "./index.module.css";
import {
  TITLE,
  SUBTITLE,
  BOX_ONE_TITLE,
  BOX_ONE_SUBTITLE,
  BOX_ONE_BODY_ONE,
  BOX_ONE_BODY_TWO,
  BOX_TWO_TITLE,
  BOX_TWO_SUBTITLE,
  BOX_TWO_BODY_ONE,
  BOX_TWO_BODY_TWO,
} from "../../constants/products";
import pic_one from "../../assets/ac-xray.png"; // 替换为实际图像路径
import pic_tow from "../../assets/ac-guard.png"; // 替换为实际图像路径

const Product = () => {
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

      <Box className={styles.colorBox}>
        <Box className={styles.verticalContainer}>
          {/* 第一个组合 */}
          <div className={styles.centerContainer}>
            <Container className={styles.colorBoxContainer}>
              <div className={styles.textSection}>
                <h1 dangerouslySetInnerHTML={{ __html: BOX_ONE_TITLE }}></h1>
                <p dangerouslySetInnerHTML={{ __html: BOX_ONE_SUBTITLE }}></p>
                <p dangerouslySetInnerHTML={{ __html: BOX_ONE_BODY_ONE }}></p>
                <p dangerouslySetInnerHTML={{ __html: BOX_ONE_BODY_TWO }}></p>
              </div>
            </Container>
            <div className={styles.imageSection}>
              <img
                src={pic_one}
                alt="Description"
                className={styles.descriptionImage}
              />
            </div>
          </div>

          {/* 第二个组合 */}
          <div className={styles.centerContainer}>
            <Container className={styles.colorBoxContainer}>
              <div className={styles.textSection}>
                <h1 dangerouslySetInnerHTML={{ __html: BOX_TWO_TITLE }}></h1>
                <p dangerouslySetInnerHTML={{ __html: BOX_TWO_SUBTITLE }}></p>
                <p dangerouslySetInnerHTML={{ __html: BOX_TWO_BODY_ONE }}></p>
                <p dangerouslySetInnerHTML={{ __html: BOX_TWO_BODY_TWO }}></p>
              </div>
            </Container>
            <div className={styles.imageSection}>
              <img
                src={pic_tow}
                alt="Description"
                className={styles.descriptionImage}
              />
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Product;
