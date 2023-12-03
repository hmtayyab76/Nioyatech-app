import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import SecurityLevels from "./DComponents/SecurityLevels";
import CaseNumber from "./DComponents/CaseNumber";
import TotalTypes from "./DComponents/TotalTypes";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";
import React, { useState } from "react";
import Splunk from "./DComponents/Splunk";

function Dashboard() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box width={"100%"}>
        <div>
          <Typography
            sx={{ fontSize: "24px", fontWeight: 500, lineHeight: "30px" }}
          >
            Splunk Dashboard
          </Typography>
        </div>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        sx={{
          width: "100%",
          marginTop: "10px",
          justifyContent: "space-around",
        }}
      >
        <SecurityLevels />
        <CaseNumber />
        <TotalTypes />
      </Box>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#8C7548",
                },
              }}
            >
              <Tab
                label="Splunk"
                value="1"
                sx={{
                  fontWeight: 500,
                  lineHeight: "24px",
                  color: "hsla(240, 3%, 11%, 0.5)",
                  fontSize: "18px",
                  "&.Mui-selected": {
                    color: "#8C7548",
                  },
                }}
              />
              <Tab
                label="EDR"
                value="2"
                sx={{
                  fontWeight: 500,
                  lineHeight: "24px",
                  color: "hsla(240, 3%, 11%, 0.5)",
                  fontSize: "18px",
                  "&.Mui-selected": {
                    color: "#8C7548",
                  },
                }}
              />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ padding: "15px 0px" }}>
            <Splunk />
          </TabPanel>
          <TabPanel value="2" sx={{ padding: "15px 0px" }}>
            About EDR
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
}

export default Dashboard;
