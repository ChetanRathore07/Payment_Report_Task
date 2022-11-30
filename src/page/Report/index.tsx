import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import SimpleTable from "components/SimpleTable";
import Select from "components/Select";
import DateSelector from "components/Date";
import ChartComponent from "components/DonutChart";
import CustomAccordion from "components/Accordion";
import CustomisedTableRow from "components/Accordion/AccordionSummary";
import AccordionFooter from "components/Accordion/AccordionFooter";
import DonutHead from "components/DonutChart/donutHead";
import AccordionHeader from "components/Accordion/AccordionHeader";
import { totalsGenerator } from "util/helper";
import useReportController from "./useReportController";
import { ItemType } from "./type";
import { report } from "util/constants";

const Report = () => {
  const {
    isLoading,
    formatProjectData,
    projectValue,
    gatewayLoading,
    formatGatewayData,
    gateWayValue,
    displayGateway,
    tableHead,
    accordionData,
    donutChart,
    projectData,
    gatewayData,
    grandTotal,
    selectGateway,
    selectFromDate,
    selectToDate,
    handleReport,
    selectProject,
  } = useReportController();
  return (
    <>
      <div className="tableMainContent">
        <div className="tableContent">
          <Typography
            variant="h5"
            component="h2"
            sx={{ marginRight: "15rem", fontSize: 24, fontWeight: 700, color: '#011F4B' }}
          >
            {report.REPORTS}
          </Typography>
          <Box component="span" sx={{ display: "block", fontSize: 16, fontWeight: 700, color: '#7E8299' }}>
            {report.EAISLY_GENRETAE_REPORT}
          </Box>
        </div>
        {isLoading ? (
          <CircularProgress disableShrink />
        ) : (
          formatProjectData && (
            <Select
              initialLabel={report.ALL_PROJECTS}
              selectData={formatProjectData}
              handleChange={selectProject}
              value={projectValue}
            />
          )
        )}

        {gatewayLoading ? (
          <CircularProgress disableShrink />
        ) : (
          formatGatewayData && (
            <Select
              initialLabel={report.ALL_GATEWAYS}
              selectData={formatGatewayData}
              handleChange={selectGateway}
              value={gateWayValue}
            />
          )
        )}
        <DateSelector initialLabel={report.FROM_DATE} handleChange={selectFromDate} />
        <DateSelector initialLabel={report.TO_DATE} handleChange={selectToDate} />
        <Button variant="contained" disableElevation onClick={handleReport}>
          {report.GENERATE_REPORT}
        </Button>
      </div>
      <Grid container sx={{ marginTop: "2rem" }}>
        <Grid
          item
          xs={12}
          md={displayGateway ? 6 : 12}
          sx={{ backgroundColor: "aliceblue", borderRadius: "12px" }}
        >
          <AccordionHeader header={tableHead} />
          {accordionData === null ? (
            <CircularProgress disableShrink />
          ) : (
            accordionData &&
            accordionData.map((item: ItemType) =>
              projectData !== null && gatewayData !== null ? (
                <SimpleTable rows={item.data} />
              ) : (
                <CustomAccordion
                  Component={
                    <CustomisedTableRow
                      grandTotalPayment={totalsGenerator(item.data)}
                      projectName={item.projectName}
                    />
                  }
                  key={`accordion-${Math.random()}`}
                >
                  <SimpleTable rows={item.data} />
                </CustomAccordion>
              )
            )
          )}
        </Grid>

        {displayGateway ? (
          <Grid item xs={12} md={6}>
            <DonutHead data={donutChart} />
            <ChartComponent data={donutChart} />
            <AccordionFooter value={`${report.GATEWAY_TOTAL} : ${grandTotal} ${report.USD}`} />
          </Grid>
        ) : (
          ""
        )}
        {displayGateway ? null : (
          <AccordionFooter value={`${report.TOTAL} : ${grandTotal} ${report.USD}`} />
        )}
      </Grid>
    </>
  );
};

export default Report;
