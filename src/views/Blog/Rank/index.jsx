import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./index.module.css";
import { columns1, columns2, rowsData1, rowsData2, rowsData3, rowsData4 } from "../../../constants/blog";

const Rank = () => {
  return (
    <div>
      <Box
        className={styles.videoBox}
        sx={{ position: "relative", minHeight: "100vh", overflowY: "auto" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 6,
            paddingTop: "200px",
            width: "100%",
            boxSizing: "border-box",
            zIndex: 1,
            position: "relative",
          }}
        >
        <Box key={1} sx={{ width: "80%", marginBottom: "20px" }}>
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            sx={{ color: "white", fontSize: "40px"  }}
          >
            {rowsData1.title}
          </Typography>
          <DataGrid
            rows={rowsData1.rows}
            columns={columns1}
            pageSize={2}
            autoHeight
            hideFooterPagination
            disableSelectionOnClick
            hideFooter
            sx={{
              "& .MuiDataGrid-cell": {
                backgroundColor: "white",
              },
              marginBottom: "50px",
            }}
          />
        </Box>
        <Box key={2} sx={{ width: "80%", marginBottom: "20px" }}>
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            sx={{ color: "white", fontSize: "40px"  }}
          >
            {rowsData2.title}
          </Typography>
          <DataGrid
            rows={rowsData2.rows}
            columns={columns2}
            pageSize={2}
            autoHeight
            hideFooterPagination
            disableSelectionOnClick
            hideFooter
            sx={{
              "& .MuiDataGrid-cell": {
                backgroundColor: "white",
              },
              marginBottom: "50px",
            }}
          />
        </Box>
        <Box key={3} sx={{ width: "80%", marginBottom: "20px" }}>
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            sx={{ color: "white", fontSize: "40px"  }}
          >
            {rowsData3.title}
          </Typography>
          <DataGrid
            rows={rowsData3.rows}
            columns={columns1}
            pageSize={2}
            autoHeight
            hideFooterPagination
            disableSelectionOnClick
            hideFooter
            sx={{
              "& .MuiDataGrid-cell": {
                backgroundColor: "white",
              },
              marginBottom: "50px",
            }}
          />
        </Box>
        <Box key={4} sx={{ width: "80%", marginBottom: "20px" }}>
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            sx={{ color: "white", fontSize: "40px"  }}
          >
            {rowsData4.title}
          </Typography>
          <DataGrid
            rows={rowsData4.rows}
            columns={columns2}
            pageSize={2}
            autoHeight
            hideFooterPagination
            disableSelectionOnClick
            hideFooter
            sx={{
              "& .MuiDataGrid-cell": {
                backgroundColor: "white",
              },
              marginBottom: "50px",
            }}
          />
        </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Rank;
