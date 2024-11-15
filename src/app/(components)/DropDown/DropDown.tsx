"use client";

import { FC, useState } from "react";
import { DropDownProps } from "./helper";
import classes from "./DropDown.module.scss";
import { sign } from "crypto";

const DropDown: FC<{
  signature: string;
  data: DropDownProps[];
  onSelectChange: (value: string) => void;
}> = ({ signature, data, onSelectChange }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    onSelectChange(value);
  };
  return (
    <select
      className={classes.dropDown}
      onChange={handleSelectChange}
      value={selectedValue}
    >
      <option value="" defaultValue="Select a car">
        {signature}
      </option>
      {data.map((item: string) => {
        return <option key={item}>{item}</option>;
      })}
    </select>
  );
};

export default DropDown;
