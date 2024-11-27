import { FC } from 'react';
import { FilteredCarsProps, carResponse } from './helper';
import  FilteredPageClient from './filteredPageClient';
import { yearsRange } from '../../../helper';
import classes from './page.module.scss';

const FilterdCarsPage: FC<{ params: FilteredCarsProps }> = async ({
  params,
}) => {
  const { makeId, year } = (await params) as FilteredCarsProps;
  const carrequest = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`).then((res) => res.json());
  const carData = carrequest.Results[0];
  console.log(carData);
  return (
    <div className={classes.container}>
      <div className={classes.filteredCars}>
        <div>Filtered Cars Page</div>
        <FilteredPageClient data={carData}/>
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
      post.MakeId
        ? {
            makeId: post.MakeId.toString(),
            year: year.toString(),
          }
        : null
    );
  });

  return params;
}
