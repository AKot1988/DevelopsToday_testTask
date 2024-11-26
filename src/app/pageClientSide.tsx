"use client";

import { FC, useState } from "react";
import { fechedDataMapper, YearsRange, fechedCarData } from "./helper";
import { DropDown, CustomLink } from "./(components)";

interface FilterPageClientSideProps {
  data: fechedCarData;
}
const FilterPageClientSide: FC<FilterPageClientSideProps> = ({ data }) => {
  const filteredManufacturers: string[] = fechedDataMapper(data);

  const [selectedCar, setSelectedCar] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const isDisabled = !selectedCar || !selectedYear;

  const curentYear = new Date().getFullYear();
  const yearsRange = YearsRange(2015, curentYear);
  // const nextPageUrl = {
  //   search: new URLSearchParams({
  //     car: selectedCar,
  //     year: selectedYear,
  //   }).toString(),
  // };
  const nextPageUrl = `/cars/${selectedCar.toLowerCase()}/${selectedYear}`;
  return (
    <>
      <DropDown
        data={filteredManufacturers}
        signature="Select a car"
        onSelectChange={setSelectedCar}
      />
      <DropDown
        data={yearsRange}
        signature="select year of assembling"
        onSelectChange={setSelectedYear}
      />
      <CustomLink
        href={nextPageUrl}
        children={`find car`}
        disabled={isDisabled}
      />
    </>
  );
};

export default FilterPageClientSide;
