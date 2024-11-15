import { FC } from "react";
import { DropDownProps } from "./helper";
import classes from "./DropDown.module.scss";

const DropDown: FC<{ data: DropDownProps[] }> = ({ data }) => {
  return (
    <select className={classes.dropDown}>
      <option value="" selected>
        Select a car
      </option>
      {data.map((item) => {
        return <option key={item}>{item}</option>;
      })}
    </select>
  );
};

export default DropDown;
