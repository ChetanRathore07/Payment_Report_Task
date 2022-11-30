import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { RowsType } from "types"; 
import "./style.css";
import StyledTableRow from "./tableRow";
import StyledTableCell from "./tableCell";

type TSimpleTableProps = {
  rows: RowsType[];
};

const SimpleTable = ({ rows = [] }: TSimpleTableProps) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              {rows &&
                rows.length > 0 &&
                rows[0].data.map((row) => (
                  <StyledTableCell key={`${row.label}`}>
                    {row.label}
                  </StyledTableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(({ paymentId, data = [] }: RowsType) => (
              <StyledTableRow key={paymentId}>
                {data.map((item) => (
                  <StyledTableCell
                    key={`${paymentId}-${item.value}`}
                    component="th"
                    scope="row"
                  >
                    {item.value}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default React.memo(SimpleTable);
