import React from "react";
import Typography from "@mui/material/Typography";

type AHProps = {
  header: string;
};

const AccordionHeader = ({ header }: AHProps) => {
  return (
    <>
      <Typography
        sx={{
          fontWeight: 700,
          margin: "16px",
          backgroundColor: "aliceblue",
          padding: "16px",
          color: "#011F4B"
        }}
      >
        {header}
      </Typography>
    </>
  );
};

export default AccordionHeader;
