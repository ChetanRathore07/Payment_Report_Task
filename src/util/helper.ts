import { GenericTableData, RowsType } from "types";

export const totalsGenerator = (rows: RowsType[]) => {
  let total = 0;
  rows.forEach((row) =>
    row.data.forEach((item: GenericTableData) => {
      if (item.label === "Amount") total += parseInt(item.value, 10);
    })
  );
  return total.toFixed(2);
};

export const totalDonutValue = (data: GenericTableData[]) => {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += parseInt(data[i].value, 10);
  }
  return sum;
};
export const calculatePercentage = (total: number, value: number) => {
  const num = (value / total) * 100;
  return num.toFixed(2);
};
