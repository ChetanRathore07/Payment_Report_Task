import { Box, Typography } from "@mui/material";
import { GenericTableData } from "types";
import { colors } from "util/constants";
import "./style.css";

const DonutHead = ({ data }: { data: GenericTableData[] }) => (
  <div className="rootDonutHeadHeat">
    <div className="rootDonutHeat">
      {data.map((element: GenericTableData, index: number) => {
        return (
          <div className="rootDonutHeat">
            <Box
              sx={{
                width: 30,
                height: 30,
                backgroundColor: `${colors[index]}`,
              }}
            ></Box>
            <Typography
              sx={{
                paddingLeft: 5,
                paddingRight: 5,
                fontsize: 18,
              }}
            >
              {element.label}
            </Typography>
          </div>
        );
      })}
    </div>
  </div>
);

export default DonutHead;
