import React from "react";
import { PieChart, Pie, Cell, Label } from "recharts";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
const COLORS = ["#14B8A6", "#FACC15", "#F59E0B", "#6366F1"];

const data = [
  { name: "High", color: "#14B8A6", value: 15 },
  { name: "Low", color: "#6366F1", value: 15 },
  { name: "Critical", color: "#F59E0B", value: 5 },
  { name: "Medium", color: "#FACC15", value: 5 },
];
function SecurityLevels() {
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
      <div>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "26px",
            color: "1c1c1e",
            textAlign: "start",
            margin: "10px 0px 0px 10px ",
          }}
        >
          Severity Levels
        </Typography>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          margin: "40px 0px",
          width: "100%",
        }}
      >
        <Paper sx={{ border: "none", boxShadow: 0, margin: 0, width: "50%" }}>
          <Paper sx={{ boxShadow: 0, margin: 0 }}>
            <PieChart width={160} height={180} margin={0}>
              <Pie
                data={data}
                cx={80}
                cy={80}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={2}
                dataKey="value"
                border="none"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
                <Label
                  value="Total Alert"
                  position="center"
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    fill: "#636366",
                  }}
                />
                <Label
                  value=""
                  position="center"
                  style={{
                    fontSize: "28px",
                    fontWeight: "bold",
                    fill: "#1c1c1c",
                  }}
                />
              </Pie>
            </PieChart>
          </Paper>
        </Paper>
        <div style={{ width: "50%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              borderBottom: "1px solid #D1D1D6",
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "20px",
                marginBottom: "8px",
              }}
            >
              Levels
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "20px",
                marginBottom: "8px",
              }}
            >
              Count
            </Typography>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-around",
              margin: "10px 0px",
            }}
          >
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    margin: "6px 0px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "10px",
                        backgroundColor: item.color,
                      }}
                    ></div>
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#636366",
                        lineHeight: "20px",
                        paddingLeft: 1,
                      }}
                    >
                      {item.name}
                    </Typography>
                  </div>

                  <Typography sx={{ mr: "20px" }}>{item.value}</Typography>
                </div>
              );
            })}
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default SecurityLevels;
