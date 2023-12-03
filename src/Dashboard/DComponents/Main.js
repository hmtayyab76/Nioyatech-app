import React, { useRef, useState } from "react";
import "../dashboard.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";  
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const rows = [
  {
    alertId: 159,
    closedDate: "2023-06-15",
    rule: "Rule 1",
    severity: "High",
    attackType: "Phishing",
  },
  {
    alertId: 237,
    closedDate: "2023-06-14",
    rule: "Rule 2",
    severity: "Medium",
    attackType: "Malware",
  },
  {
    alertId: 262,
    closedDate: "2023-06-13",
    rule: "Rule 3",
    severity: "Low",
    attackType: "DDoS",
  },
  {
    alertId: 159,
    closedDate: "2023-06-15",
    rule: "Rule 1",
    severity: "High",
    attackType: "Phishing",
  },
  {
    alertId: 237,
    closedDate: "2023-06-14",
    rule: "Rule 2",
    severity: "Medium",
    attackType: "Malware",
  },
  {
    alertId: 262,
    closedDate: "2023-06-13",
    rule: "Rule 3",
    severity: "Low",
    attackType: "DDoS",
  },
];

function Main() {
  const alertIdRef = useRef(null);
  const closedDateRef = useRef(null);
  const ruleRef = useRef(null);
  const severityRef = useRef(null);
  const attackTypeRef = useRef(null);

  const [expandedRow, setExpandedRow] = useState(null);

  const handleClearFilters = () => {
    alertIdRef.current.value = "";
    closedDateRef.current.value = "";
    ruleRef.current.value = "";
    severityRef.current.value = "";
    attackTypeRef.current.value = "";
  };

  const handleRowClick = (index) => {
    if (expandedRow === index) {
      // If the clicked row is already expanded, collapse it
      setExpandedRow(null);
    } else {
      // Expand the clicked row
      setExpandedRow(index);
    }
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="container p-0">
        <div className="field">
          <label htmlFor="alertId">Alert ID</label>
          <br />
          <input
            type="text"
            id="alertId"
            className="input"
            placeholder="Alert ID"
            style={{ borderColor: "#1d1d16" }}
            ref={alertIdRef}
          />
        </div>

        <div className="field">
          <label htmlFor="closedDate">Closed Date</label>
          <br />
          <input
            type="date"
            id="closedDate"
            placeholder="Closed Date"
            className="input"
            style={{ borderColor: "#1d1d16" }}
            ref={closedDateRef}
          />
        </div>

        <div className="field">
          <label htmlFor="rule">Rule</label>
          <br />
          <input
            type="text"
            id="rule"
            className="input"
            placeholder="Rule"
            style={{ borderColor: "#1d1d16" }}
            ref={ruleRef}
          />
        </div>

        <div className="field">
          <label htmlFor="severity">Severity</label>
          <br />
          <input
            type="text"
            id="severity"
            placeholder="Severity"
            className="input"
            style={{ borderColor: "#1d1d16" }}
            ref={severityRef}
          />
        </div>

        <div className="field">
          <label htmlFor="attackType">Attack Type</label>
          <br />
          <input
            type="text"
            id="attackType"
            placeholder="Attack Type"
            className="input"
            style={{ borderColor: "#1d1d16" }}
            ref={attackTypeRef}
          />
        </div>
        <div onClick={handleClearFilters} className="clearbtn">
          Clear Filters
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Actions</TableCell>
              <TableCell>Alert ID</TableCell>
              <TableCell>Closed Date</TableCell>
              <TableCell>Rule</TableCell>
              <TableCell>Severity</TableCell>
              <TableCell>Attack Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <>
                <TableRow key={index}>
                  <TableCell>
                    <Tooltip
                      TransitionComponent={Zoom}
                      title="See Details"
                      arrow
                    >
                      <DescriptionIcon
                        sx={{
                          cursor: "pointer",
                          color: expandedRow === index ? "#219653" : "#000",
                        }}
                        onClick={() => handleRowClick(index)}
                      />
                    </Tooltip>
                    <PersonAddAltOutlinedIcon />
                  </TableCell>
                  <TableCell>{row.alertId}</TableCell>
                  <TableCell>{row.closedDate}</TableCell>
                  <TableCell>{row.rule}</TableCell>
                  <TableCell>{row.severity}</TableCell>
                  <TableCell>{row.attackType}</TableCell>
                </TableRow>

                {expandedRow === index && (
                  <TableRow key={`${index}-details`}>
                    <TableCell colSpan={6}>
                      <div className="w-100 details d-flex  ">
                        <table className="section w-50 ">
                          <tr>
                            <td>Title: </td>
                            <td>Test</td>
                          </tr>
                          <tr>
                            <td>Severity: </td>
                            <td>{row.severity}</td>
                          </tr>
                          <tr>
                            <td>Assignee: </td>
                            <td>Charles Carmichael</td>
                          </tr>
                          <tr>
                            <td>Date: </td>
                            <td>{row.closedDate}</td>
                          </tr>
                          <tr>
                            <td>Details: </td>
                            <td>
                              Lorem ipsum dolor sit amet consectetur. Cras sit
                              porta.
                            </td>
                          </tr>
                        </table>
                        <div className="w-50">
                          <table className="section w-100 mx-4">
                            <tr>
                              <td>Type: </td>
                              <td>Domain</td>
                            </tr>
                            <tr>
                              <td>Value: </td>
                              <td>123</td>
                            </tr>
                            <tr>
                              <td>Description: </td>
                              <td>
                                Lorem ipsum dolor sit amet consectetur. Cras sit
                                porta.
                              </td>
                            </tr>
                          </table>
                          <div className="d-flex justify-content-end mt-2 ">
                            <button className="exbtn goplaybtn">
                              GO PLAYBOOK
                            </button>
                            <button
                              className="exbtn text-center assignbtn d-flex align-items-center"
                              onClick={handleClickOpen}
                            >
                              <PersonAddAltOutlinedIcon />
                              <span> ASSIGN CASE </span>
                            </button>
                            <div>
                              <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                                sx={{}}
                              >
                                <CheckCircleIcon
                                  sx={{
                                    margin: "auto",
                                    color: "#4caf50",
                                    fontSize: "5rem",
                                    marginTop: "10px",
                                  }}
                                />
                                <DialogTitle
                                  sx={{
                                    color: "#1C1C1E",
                                    fontSize: "24px",
                                    fontWeight: "500",
                                    margin: "0px 20px",
                                  }}
                                  id="alert-dialog-title"
                                >
                                  Are you Sure To Assign Yourself
                                </DialogTitle>
                                <DialogContent>
                                  <DialogContentText
                                    id="alert-dialog-description"
                                    sx={{
                                      textAlign: "center",
                                      color: "hsla(240, 3%, 11%, 0.5)",
                                      fontSize: "20px",
                                      fontWeight: "500",
                                    }}
                                  >
                                    Assign the case Now
                                  </DialogContentText>
                                </DialogContent>
                                <DialogActions sx={{ margin: "auto" }}>
                                  <Button
                                    sx={{
                                      background: "#219653",
                                      color: "white",
                                      fontSize: "14px",
                                      fontWeight: "500",
                                      padding: "5px 10px",
                                    }}
                                    onClick={handleClose}
                                  >
                                    ASSIGN
                                  </Button>
                                  <Button
                                    sx={{
                                      background: "#EB5757",
                                      color: "white",
                                      fontSize: "14px",
                                      fontWeight: "500",
                                      padding: "5px 10px",
                                    }}
                                    onClick={handleClose}
                                    autoFocus
                                  >
                                    CANCEL
                                  </Button>
                                </DialogActions>
                              </Dialog>
                            </div>
                            ;
                          </div>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Main;
