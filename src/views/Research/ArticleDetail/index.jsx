import React from "react";
import { useParams, Link} from "react-router-dom";
// import { useParams, Link, useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import { Box, Typography, Button } from "@mui/material";
import { articles } from "../../../constants/articles";

const ArticleDetail = () => {
  const { id } = useParams();
  const articleIndex = parseInt(id, 10);
  const article = articles[articleIndex];
  // const navigate = useNavigate();

  const prevArticle = articleIndex > 0 ? articles[articleIndex - 1] : null;
  const nextArticle =
    articleIndex < articles.length - 1 ? articles[articleIndex + 1] : null;

  return (
    <div className={styles.pageContainer}>
      <Box className={styles.videoBox}>
        <Box className={styles.videoContent}>
          <Typography variant="h3" className={styles.title}>
            {article.title}
          </Typography>
          <Typography variant="h3" className={styles.subtitle}>
            <strong>{article.conf} </strong>{article.date}
          </Typography>
          {/* <Button
            className={styles.dateButton}
          >
            <strong>{article.conf} </strong>{article.date}
          </Button> */}
          
          {/* <a href="https://ijcai20.org/" target="_blank" rel="noopener noreferrer">
            <Button className={styles.dateButton}>
              <strong>{article.conf}</strong> {article.date}
            </Button>
          </a> */}
        </Box>
      </Box>

      <Box className={styles.articleContainer}>
        {/* <Typography variant="h6" gutterBottom className={styles.abstract}>
          <strong>Abstract:</strong> {article.abstract}
        </Typography> */}
        <Typography variant="h6" gutterBottom className={styles.abstract}>
          <strong>Abstract: </strong>
          {article.abstract.split('\n ').map((sentence, index) => (
            <span key={index}>
              {sentence}
              <br /><br />
            </span>
          ))}
        </Typography>
        <Typography variant="h7" gutterBottom className={styles.author}>
          <strong>Author: </strong> {article.author} In <strong>{article.conf}</strong>  {article.date}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={() => window.open(article.link, "_blank")}
          className={styles.viewPaperButton}
        >
          View Paper
        </Button>

        <Box className={styles.navigationButtons}>
          {prevArticle && (
            <Button
              component={Link}
              to={`/articleDetail/${articleIndex - 1}`}
              className={styles.navButton}
            >
              &lt; Previous
            </Button>
          )}
          {nextArticle && (
            <Button
              component={Link}
              to={`/articleDetail/${articleIndex + 1}`}
              className={styles.navButton}
            >
              Next &gt;
            </Button>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default ArticleDetail;
