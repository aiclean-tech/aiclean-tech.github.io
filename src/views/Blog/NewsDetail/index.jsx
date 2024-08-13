import React from "react";
import { useParams, Link } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { news as newsData } from "../../../constants/news";

const NewsDetail = () => {
  const { id } = useParams();
  const newsIndex = parseInt(id, 10);
  const news = newsData[newsIndex];

  const prevNews = newsIndex > 0 ? newsData[newsIndex - 1] : null;
  const nextArticle =
    newsIndex < newsData.length - 1 ? newsData[newsIndex + 1] : null;

  return (
    <Box sx={{ maxWidth: 800, margin: "0 auto", padding: 2 }}>
      {news ? (
        <>
          <Typography variant="h4" gutterBottom>
            {news.title}
          </Typography>
          <Typography variant="body1">{news.content}</Typography>
        </>
      ) : (
        <Typography variant="h6" color="error">
          新闻未找到
        </Typography>
      )}

      <Box
        sx={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}
      >
        {prevNews && (
          <Button
            component={Link}
            to={`/newsDetail/${newsIndex - 1}`}
            sx={{ textTransform: "none" }}
          >
            &lt; Previous: {prevNews.title}
          </Button>
        )}
        {nextArticle && (
          <Button
            component={Link}
            to={`/newsDetail/${newsIndex + 1}`}
            sx={{ textTransform: "none" }}
          >
            Next: {nextArticle.title} &gt;
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default NewsDetail;
