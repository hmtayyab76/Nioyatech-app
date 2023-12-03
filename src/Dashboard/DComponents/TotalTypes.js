import React from "react";
import Typography from "@mui/material/Typography";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

import { Box } from "@mui/material";

const data = [
  {
    name: "Malicious",
    uv: 50,
  },
  {
    name: "True",
    t: 30,
  },
  {
    name: "False",

    f: 50,
  },
  {
    name: "TP",
    tp: 40,
  },
  {
    name: "FP",
    fp: 36,
  },
];

const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;
  const barWidth = 18;
  const borderRadius = 7;

  return (
    <rect
      x={x + (width - barWidth) / 2}
      y={y}
      width={barWidth}
      height={height}
      fill={fill}
      rx={borderRadius}
    />
  );
};
function TotalTypes() {
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
          Total Types
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
        Total Types: 80 Types
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          margin: "0px 0px",
          width: "100%",
        }}
      >
        <div className="w-100">
          <BarChart
            width={400}
            height={200}
            data={data}
            margin={{
              top: 5,
              right: 60,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar shape={<CustomBar />} dataKey="" fill="#2095F3" />
            <Bar shape={<CustomBar />} dataKey="" fill="#2095F3" />
            <Bar shape={<CustomBar />} dataKey="uv" fill="#2095F3" />
            <Bar shape={<CustomBar />} dataKey="t" fill="#F59E0B" />
            <Bar shape={<CustomBar />} dataKey="f" fill="#EB5757" />
            <Bar shape={<CustomBar />} dataKey="tp" fill="#6366F1" />
            <Bar shape={<CustomBar />} dataKey="fp" fill="#219653" />
          </BarChart>
        </div>
      </Box>
    </Box>
  );
}

export default TotalTypes;
