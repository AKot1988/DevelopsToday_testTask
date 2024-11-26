import { FC } from 'react';
import { FilteredCarsProps, carResponse } from './helper';
import { yearsRange } from '../../../helper';
import classes from './page.module.scss';

const FilterdCarsPage: FC<{ params: FilteredCarsProps }> = async ({
  params,
}) => {
  const { make, year } = (await params) as FilteredCarsProps;
  console.log('filteredCarPage', make, year);
  return (
    <div className={classes.container}>
      <div className={classes.filteredCars}>
        <div>Filtered Cars Page</div>
        <p>
          You have been chosen {make} of {year}
        </p>
      </div>
    </div>
  );
};

export default FilterdCarsPage;

export async function generateStaticParams() {
  const posts = await fetch(
    'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
  ).then((res) => res.json());

  const params = posts.Results.flatMap((post: carResponse) => {
    return yearsRange.map((year) =>
      post.MakeName
        ? {
            make: post.MakeName.toLowerCase(), // Переводимо make до нижнього регістру (для URL)
            year: year.toString(),
          }
        : null
    );
  });

  return params;
}
