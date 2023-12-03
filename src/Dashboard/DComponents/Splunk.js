import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Main from "./Main";

const Splunk = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyles = {
    fontWeight: 500,
    lineHeight: "24px",
    color: "#1c1c1e",
    fontSize: "18px",
    borderRight: "1px solid #8C7548",
    padding: "0px 50px",
    textTransform: "none",
    "&.Mui-selected": {
      color: "#fff",
      background: "#8C7548",
    },
  };

  const tabStyles2 = {
    fontWeight: 500,
    lineHeight: "24px",
    color: "#1c1c1e",
    fontSize: "12px",
    borderRight: "1px solid #8C7548",
    padding: "0px 0px",
    textTransform: "none",
    "&.Mui-selected": {
      color: "#fff",
      background: "#8C7548",
    },
  };

  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            sx={{
              border: "1px solid #8C7548",
              borderRadius: "10px",
              width: "fit-content",
              "& .MuiTabs-indicator": {
                backgroundColor: "#8C7548",
              },
              "@media (max-width: 960px)": {
                "& button": {
                  ...tabStyles2,
                },
              },
              "@media (min-width: 960px)": {
                "& button": {
                  ...tabStyles,
                },
              },
            }}
          >
            <Tab label="Main" value="1" />
            <Tab label="Investigation" value="2" />
            <Tab label="Closed" value="3" />
            <Tab label="Escalated" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{ padding: "15px 0px" }}>
          <Main />
        </TabPanel>
        <TabPanel value="2" sx={{ padding: "15px 0px" }}>
          Item Two
        </TabPanel>
        <TabPanel value="3" sx={{ padding: "15px 0px" }}>
          Item Three
        </TabPanel>
        <TabPanel value="4" sx={{ padding: "15px 0px" }}>
          Item Four
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default Splunk;
