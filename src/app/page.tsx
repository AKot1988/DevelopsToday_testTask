import { FC } from 'react';
import { DropDown } from './(components)';
import { fechedDataMapper } from './helper';
import classes from './page.module.scss';

const FilterPage: FC = async() => {
  const cars = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json').then(res => res.json());
  const filteredManufacturers: string[] = fechedDataMapper(cars);
  console.log(cars);
  return (
    <div className={classes.container}>
      <div className={classes.filterPage}>
        <h1>Filter Page</h1>
        <DropDown data={filteredManufacturers} />
      </div>
    </div>
  );
}

export default FilterPage;