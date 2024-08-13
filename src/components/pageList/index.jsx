import React, { useState } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const PageList = ({ items = [], title, basePath, buttonText }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handlePageChange = (event, pageNumber) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  const handleResearchClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <Box
      sx={{
        maxWidth: 800,
        width: "80%",
        margin: "0 auto",
        padding: 2,
        backgroundColor: "#0B0121",
        color: "white",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          marginBottom: "40px",
        }}
      >
        {title}
      </Typography>
      <Divider sx={{ backgroundColor: "#ccc" }} />
      {currentItems.map((item, index) => (
        <Box key={index}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 2,
              textAlign: "center",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                borderRadius: "20px",
                marginRight: 2,
                borderColor: "white",
                color: "white",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#0B0121",
                },
              }}
              onClick={handleResearchClick}
            >
              {buttonText}
            </Button>
            <Typography
              variant="body1"
              sx={{ flexGrow: 1, textAlign: "center" }}
            >
              {item.title}
            </Typography>
            {title === "News" ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", whiteSpace: "nowrap" }}
              >
                <Button sx={{ color: "#ccc" }}>Read More</Button>
              </a>
            ) : (
              <Link
                to={`${basePath}/${index + indexOfFirstItem}`}
                style={{ textDecoration: "none", whiteSpace: "nowrap" }}
              >
                <Button sx={{ color: "#ccc" }}>Read More</Button>
              </Link>
            )}
          </Box>
          <Divider sx={{ backgroundColor: "#ccc" }} />
        </Box>
      ))}
      <Box sx={{ textAlign: "center", marginTop: 2, marginBottom: 4 }}>
        <Button
          disabled={currentPage === 1}
          onClick={(e) => handlePageChange(e, currentPage - 1)}
          sx={{ color: "#ccc" }}
        >
          &lt;
        </Button>
        {[...Array(totalPages).keys()].map((number) => (
          <Button
            key={number}
            onClick={(e) => handlePageChange(e, number + 1)}
            sx={{ color: "#ccc", mx: 0.5 }}
          >
            {number + 1}
          </Button>
        ))}
        <Button
          disabled={currentPage === totalPages}
          onClick={(e) => handlePageChange(e, currentPage + 1)}
          sx={{ color: "#ccc" }}
        >
          &gt;
        </Button>
      </Box>
    </Box>
  );
};

export default PageList;
