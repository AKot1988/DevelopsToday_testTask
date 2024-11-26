import { fechedCarData } from './helper';
import FilterPageClientSide from './pageClientSide';
import classes from './page.module.scss';

const FilterPage = async ({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) => {
  const cars: fechedCarData = await fetch(
    'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
  ).then((res) => res.json());
  // console.log(searchParams["car"]);

  return (
    <div className={classes.container}>
      <div className={classes.filterPage}>
        <h1>Home Page</h1>
        <FilterPageClientSide data={cars} />
      </div>
    </div>
  );
};

export default FilterPage;
