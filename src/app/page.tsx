import { FC } from 'react';
import classes from './page.module.scss';

const FilterPage: FC = async() => {
  const cars = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json').then(res => res.json());
  console.log(cars);
  return (
    <div className={classes.container}>
      <div className={classes.filterPage}>
        <h1>Filter Page</h1>
      </div>
    </div>
  );
}

export default FilterPage;