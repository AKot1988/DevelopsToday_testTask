'use client';

import { FC, useState, useEffect, use } from 'react';
import { fechedDataMapper, yearsRange, fechedCarData } from './helper';
import { DropDown, CustomLink } from './(components)';

interface FilterPageClientSideProps {
  data: fechedCarData;
}
const FilterPageClientSide: FC<FilterPageClientSideProps> = ({ data }) => {
  const filteredManufacturers: string[] = fechedDataMapper(data);

  const [selectedCar, setSelectedCar] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [nextPageUrl, setNextPageUrl] = useState('');

  const isDisabled = !selectedCar || !selectedYear;

  let selectedCarID = '';
  useEffect(() => {
    data.Results.find((car) => {
      if (car.MakeName === selectedCar) {
        selectedCarID = car.MakeId.toString();
      }
    });
    setNextPageUrl(`/${selectedCarID}/${selectedYear}/filteredCars`);
  }, [selectedCar, selectedYear]);
  // const nextPageUrl = {
  //   search: new URLSearchParams({
  //     car: selectedCar,
  //     year: selectedYear,
  //   }).toString(),
  // };
  console.log(nextPageUrl);
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
