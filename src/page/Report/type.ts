import { RowsType, ApiResponse } from "types";

export type GatewayDataType = {
  name: string;
  gatewayId: string;
};

export type TableFormatType = {
  amount: number;
  projectId: string;
  gatewayId: string;
  created: string;
  paymentId: string;
};

export type ProjectAPIType<T> = {
  isLoading: boolean;
  res: ApiResponse<T>;
  // eslint-disable-next-line @typescript-eslint/ban-types
  asyncFunc: Function;
};

export type ItemType = {
  data: RowsType[];
  projectName: string;
};

export type TDataFormat = {
  id: string;
  name: string;
  type: string;
};

export type TAccordionData = {
  projectName: string;
  data: RowsType[];
  total: string;
};

export type TFormatData = {
  paymentId: string;
  projectId: string;
  gatewayData: string;
  data: (
    | {
        label: string;
        value: string | undefined;
      }
    | {
        label: string;
        value: number;
      }
  )[];
};
