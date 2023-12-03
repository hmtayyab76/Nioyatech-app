import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import WebIcon from "@mui/icons-material/Web";
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import "./dashboard.css"
import Dashboard from "./Dashboard";
import SocToolsPlatform from "./SocToolsPlatform";
import LogFaker from "./LogFaker";
import Playbook from "./Playbook";
import PerpetualLogs from "./PerpetualLogs";
import Reporting from "./Reporting";
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import DescriptionIcon from '@mui/icons-material/Description';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Sidebar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const tab_css = `
  .tab-links {
    display: flex !important;
    align-items: center !important;
    // width: 100% !important;
    font-size: 14px !important;
    line-height: 20px !important;
  }
  @media (min-width: 950px) {
    .tab-links span{
      display: flex !important;
    }
  }
  @media (max-width: 950px) {
    .tab-links span {
      display: none !important;
    }
  }
        `
  return (
    
    <Box
      sx={{
        display: "flex",
        width: "100%",
      }}
    >
      <style>
            {tab_css}
          </style>
      <Box sx={{ width: "20%", height:"100vh", borderRight:"1px solid #E5E5EA"}}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{alignItems:"",margin:"10px",fontWeight:"500",fontSize:"14px","& .Mui-selected": {
            color: "#8C7548 !important",
            borderRadius:"8px",
            backgroundColor: "rgba(140, 117, 72, 0.08)",
          },}}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#8C7548",
              width:"4px",
            },
          }}
        >
          
          <Tab label=
          {
            <div className="tab-links" >
              <WebIcon
                  style={{ marginRight: "8px", width: "20px", height: "24px" }}
                />
              <span>Dashboard</span>
            </div>
          } {...a11yProps(0)} />
          <Tab label={
            <div className="tab-links" >
              <PersonalVideoIcon
                  style={{ marginRight: "8px", width: "20px", height: "24px" }}
                />
              <span>Soc Tools Platform</span>
            </div>
          }{...a11yProps(1)} />
          <Tab label={
            <div className="tab-links" >
              <WebIcon
                  style={{ marginRight: "8px", width: "20px", height: "24px" }}
                />
              <span>Log Faker</span>
            </div>
          } {...a11yProps(2)} />
          <Tab label={
            <div className="tab-links" >
              <WebIcon
                  style={{ marginRight: "8px", width: "20px", height: "24px" }}
                />
              <span>Perpetual Logs</span>
            </div>
          } {...a11yProps(3)} />
          <Tab  label={
            <div className="tab-links" >
              <DescriptionIcon
                  style={{ marginRight: "8px", width: "20px", height: "24px" }}
                />
              <span>Playbook</span>
            </div>
          } {...a11yProps(4)} />
          <Tab label={
            <div className="tab-links" >
              <EmojiFlagsIcon
                  style={{ marginRight: "8px", width: "20px", height: "24px" }}
                />
              <span>Reporting</span>
            </div>
          } {...a11yProps(5)} />
        </Tabs>
      </Box>
      <Box sx={{ width: "90%", overflow: "auto" }}>
        <TabPanel value={value} index={0}>
          <Dashboard/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SocToolsPlatform/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <LogFaker/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <PerpetualLogs/>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Playbook/>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Reporting/>
        </TabPanel>
      </Box>
    </Box>
  );
}

export default Sidebar;
