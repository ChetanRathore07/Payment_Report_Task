/* eslint-disable @typescript-eslint/ban-types */
import * as React from "react";
import {
  SelectUnstyled,
  SelectUnstyledProps,
} from "@mui/base/";
import { StyledButton, StyledListbox, StyledOption } from './selectStyle'

type SelectType = {
  initialLabel: string;
  selectData: mapType[];
  handleChange: (e: HTMLInputElement | null) => void;
  value: HTMLInputElement | null | undefined;
};
type mapType = {
  name: string;
  id: string;
  type: string;
};

const CustomSelect = React.forwardRef(function CustomSelect<TValue extends {}>(
  props: SelectUnstyledProps<TValue>
) {
  const components: SelectUnstyledProps<TValue>["components"] = {
    Root: StyledButton,
    Listbox: StyledListbox,
    ...props.components,
  };

  return <SelectUnstyled {...props} components={components} />;
}) as <TValue extends {}>(
  props: SelectUnstyledProps<TValue> & React.RefAttributes<HTMLUListElement>
) => JSX.Element;

const Select = ({
  initialLabel,
  selectData,
  handleChange,
  value,
}: SelectType) => {
  return (
    <CustomSelect defaultValue={null} onChange={handleChange} value={value} >
      <StyledOption value={null}>{initialLabel}</StyledOption>
      {selectData.map(({ name, id }: mapType) => (
        <StyledOption value={id} key={id}>
          {name}
        </StyledOption>
      ))}
    </CustomSelect>
  );
};

export default Select;