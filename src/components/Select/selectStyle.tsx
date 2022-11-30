import {
  selectUnstyledClasses,
} from "@mui/base/";
import OptionUnstyled from "@mui/base/OptionUnstyled";
import { styled } from "@mui/system";

export const StyledButton = styled("button")(
  () => `
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      box-sizing: border-box;
      min-height: calc(1.5em + 22px);
      min-width: 135px;
      background: #1BC5BD;
      border: 1px solid #fff;
      border-radius: 5px;
      margin: 0.5em;
      padding: 6px 10px 10px 10px;
      text-align: left;
      line-height: 1.5;
      color: #fff;
      height: 32px;
      &.${selectUnstyledClasses.expanded} {
        &::after {
          content: '▴';
        }
      }
    
      &::after {
        content: '▾';
        float: right;
      }
      `
);
  
export const StyledListbox = styled("ul")(
  () => `
      font-family: IBM Plex Sans, sans-serif;
      font-size: 0.875rem;
      box-sizing: border-box;
      padding: 5px;
      margin: 1px 0;
      min-width: 135px;
      background: #1BC5BD;
      border: 1px solid #fff;
      border-radius: 5px;
      color: #fff;
      overflow: auto;
      outline: 0px;
      text-align: left;
      `
);
  
export const StyledOption = styled(OptionUnstyled)(
  () => `
      list-style: none;
      padding: 8px;
      border-radius: 0.45em;
      cursor: pointer;    
      &:last-of-type {
        border-bottom: none;
      }`
);