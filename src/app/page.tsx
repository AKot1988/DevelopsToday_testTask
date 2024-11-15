"use client"

import { FC, useState } from "react";
import { DropDown, CustomLink } from "./(components)";
import { fechedDataMapper, YearsRange } from "./helper";
import classes from "./page.module.scss";

const cars = await fetch(
  "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
).then((res) => res.json());

const FilterPage: FC = () => {

  const filteredManufacturers: string[] = fechedDataMapper(cars);

  const [selectedCar, setSelectedCar] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  
  const isDisabled = !selectedCar || !selectedYear;


  const curentYear = new Date().getFullYear();
  const yearsRange = YearsRange(2015, curentYear);
  return (
    <div className={classes.container}>
      <div className={classes.filterPage}>
        <h1>Filter Page</h1>
        <DropDown data={filteredManufacturers} signature="Select a car" onSelectChange={setSelectedCar}/>
        <DropDown data={yearsRange} signature="select year of assembling" onSelectChange={setSelectedYear}/>
        <CustomLink
          href={`/filteredCars`}
          children={`search`}
          disabled={isDisabled}
        />
      </div>
    </div>
  );
};

export default FilterPage;
