import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const progress = [
  { progress: "60%", color: "#2196F3", title: "60 Main Cases" },
  { progress: "25%", color: "#F59E0B", title: "25 Investigation Cases" },
  { progress: "15%", color: "#14B8A6", title: "15 Closed Cases" },
];
function CaseNumber() {
  return (
    <Box
      width={{ xs: "100%", sm: "100%", md: "50%", lg: "31%" }}
      sx={{
        backgroundColor: "white",
        border: "1px solid #E5E5E5",
        padding: "10px",
        borderRadius: "10px",
        margin: "8px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ borderBottom: "1px solid #e5e5e5" }}>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "26px",
            color: "1c1c1e",
            textAlign: "start",
            margin: "10px 0px 10px 0px ",
          }}
        >
          Case Number
        </Typography>
      </div>
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 500,
          lineHeight: "26px",
          color: "1c1c1e",
          textAlign: "end",
          margin: "10px 0px 10px 0px ",
        }}
      >
        Total Types: 100 Types
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {progress.map((item, index) => (
            <div className="w-100 mt-2" key={index}>
              <Typography
                sx={{
                  marginBottom: "6px",
                  fontWeight: 400,
                  fontSize: "12px",
                  lineHeight: "22px",
                }}
              >
                {item.title}
              </Typography>
              <div
                className="progress w-100"
                style={{
                  height: "22px",
                  background: "hsla(240, 1%, 39%, 0.3)",
                  borderRadius: "30px",
                }}
              >
                <div
                  className="progress-bar"
                  style={{ width: item.progress, background: item.color }}
                ></div>
              </div>
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default CaseNumber;
